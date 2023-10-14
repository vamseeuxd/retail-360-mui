import * as React from "react";
import { PageHeading } from "../../components/pageHeading";

interface PageProps {
  children?: React.ReactNode;
}

export default function Page(props: PageProps) {
  return (
    <PageHeading>Owners</PageHeading>
  );
}
