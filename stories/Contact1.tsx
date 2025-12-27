interface Contact1Props {
  className?: string;
}

const Contact1 = ({ className = "mt-24 lg:mt-32" }: Contact1Props) => {
  return (
    <section className={className}>
      <div className="container">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="flex max-w-1/2 flex-col justify-between gap-10">
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

          <div className="mx-auto flex max-w-3xl flex-col gap-6 rounded-lg border p-10">
            test text
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact1 };
