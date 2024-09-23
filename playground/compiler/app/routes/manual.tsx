import type { Default } from "./+types.manual";

export const loader = () => {
  return {
    date: new Date(),
    number: Math.random(),
  };
};

export default function Route({ loaderData, params }: Default["args"]) {
  const x = loaderData.date;
  //    ^?
  const y = params.id;
  //    ^?

  return <h1>Hello</h1>;
}
