interface Props {
  message?: string;
}

function FullPageError({ message }: Props) {
  return (
    <section className="w-full h-96 flex-col space-y-10 flex items-center justify-center p-10">
      <h1 className="text-xl">
        Uh Oh! {message || "We are having trouble loading the page"}
      </h1>
    </section>
  );
}

export default FullPageError;
