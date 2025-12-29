import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react";

interface Contact1Props {
  className?: string;
}

const Contact1 = ({ className }: Contact1Props) => {
  return (
    <section className={className}>
      <div className="container">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="flex lg:max-w-1/2 flex-col justify-between gap-10">
            <div className="text-center lg:text-left flex flex-col gap-4">
              <h2 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                Contact Us
              </h2>

              <p className="text-muted-foreground">
                We are available for questions, feedback, or collaboration
                opportunities. Let us know how we can help!
              </p>
            </div>
          </div>

          <div className="mx-auto flex max-w-xl w-full flex-col gap-6 rounded-lg border p-10">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

const actionFn = async (previousState: string, formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  console.log(previousState, name, email, message);

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return "Form submitted successfully";
};

const Form = () => {
  const [state, formAction, isPending] = useActionState(actionFn, "");

  return (
    <form action={formAction}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Full Name</FieldLabel>
          <Input
            type="text"
            placeholder="Full Name"
            id="name"
            required
            name="name"
            disabled={isPending}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            type="email"
            placeholder="Email"
            id="email"
            required
            name="email"
            disabled={isPending}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            placeholder="Message"
            id="message"
            required
            name="message"
            disabled={isPending}
          />
        </Field>
        <Field>
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Submitting..." : "Submit"}
          </Button>
        </Field>
      </FieldGroup>

      {state && !isPending && <p className="text-green-500 mt-2">{state}</p>}
    </form>
  );
};

export { Contact1 };
