"use client";

import React, { useState } from "react";

import * as z from "zod";

import { MessageSquare } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Heading from "@/components/heading";
import { formSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage } from "openai";
import axios from "axios";
import Empty from "@/components/empty";
import Loader from "@/components/loader";
import { cn } from "@/lib/utils";
import UserAvatar from "@/components/user-avatar";
import BotAvatar from "@/components/bot-avatar";
import { useAuth } from "@clerk/nextjs";

const ConversationPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const { userId } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/conversation", {
        messages: newMessages,
      });
      setMessages((curr) => [...curr, userMessage, response.data]);
      form.reset();
    } catch (error: any) {
      //TODO: open pro modal
      console.log(error);
    } finally {
      router.refresh();
    }

    console.log(values);
  };

  const handleLogin = (e: MouseEvent) => {
    e.preventDefault();
    router.push("/sign-in");
  };

  //   const {isLoading, error} = form;

  return (
    <div>
      <Heading
        title="Conversation"
        description="OpenAi client. Uses Clerk to authenticate user"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none
                      focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isSubmitting}
                        placeholder="how do i ..."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              {userId ? (
                <Button
                  className="col-span-12 lg:col-span-2 w-full"
                  disabled={isSubmitting}
                >
                  Generate
                </Button>
              ) : (
                <Button
                  variant="destructive"
                  className="col-span-12 lg:col-span-2 w-full"
                  onClick={handleLogin}
                >
                  Login To Use
                </Button>
              )}
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isSubmitting && (
            <div className="p-8 rounded-lg w-full felx items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isSubmitting && (
            <Empty label="No conversation started" />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "user"
                    ? "bg-white border border-black/10"
                    : "bg-muted"
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <p className="text-sm">{message.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
