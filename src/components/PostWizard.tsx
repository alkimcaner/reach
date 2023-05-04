"use client";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { MouseEvent, useState } from "react";
import { TopicSelector } from "./TopicSelector";

function PostWizard() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handlePost = (e: MouseEvent) => {
    e.preventDefault();
    console.log(title, body);
  };

  return (
    <form className="mx-auto flex w-full max-w-sm flex-col gap-4 py-8">
      <TopicSelector />
      <Input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Type your message here."
        onChange={(e) => setBody(e.target.value)}
      />
      <Button onClick={handlePost}>Post</Button>
    </form>
  );
}

export default PostWizard;
