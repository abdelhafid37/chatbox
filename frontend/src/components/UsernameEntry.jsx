import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "./ui/field";
import { Input } from "./ui/input";

export default function UsernameEntry({ setUsername }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  function isValid(input) {
    if (typeof input !== "string") return false;
    const inputLength = input.length;

    if (!(inputLength > 0)) {
      setError("Username required.");
      return false;
    }
    if (inputLength < 3) {
      setError("Username must be more then 3 characters.");
      return false;
    }
    if (inputLength > 20) {
      setError("Username must be less then 20 characters.");
      return false;
    }

    return true;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const inputVal = input.trim();
    if (isValid(inputVal)) setUsername(inputVal);
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-dvh w-full relative">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl">Welcome to Chat box</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button>Get Started</Button>
          </DialogTrigger>
          <DialogContent aria-describedby="username entry">
            <DialogHeader className="text-base font-semibold">
              Enter username
            </DialogHeader>
            <DialogDescription>
              This username is going to be public to anyone in the chat, enter a
              unique username and join now.
            </DialogDescription>
            <form onSubmit={handleSubmit}>
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel>Username</FieldLabel>
                    <Input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    />
                    <FieldError errors={[{ message: error }]} />
                  </Field>
                  <Field>
                    <Button className="py-4" type="submit">
                      Join
                    </Button>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
