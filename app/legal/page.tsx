import { Main, Container, Section } from "@/components/craft";

export default function Page() {
  return (
    <Main>
      <Section>
        <Container className="text-sm">
          <p>
            Client and anyone claiming on behalf of Client releases and forever
            discharges Curiously Clean and its affiliates, successors and
            assigns, officers, employees, representatives, partners, agents,
            subsidiaries and anyone claiming through them (collectively, the
            “Released Parties”), in their individual and/or corporate capacities
            from any and all claims, liabilities, obligations, promises,
            agreements, disputes, demands, damages, causes of action of any
            nature and kind, known or unknown, which Client has or ever has had
            or may in the future have against Curiously Clean or any of the
            Released Parties arising out of or relating to the use of Curiously
            Clean&apos;s services and facilities (“Claims”).
          </p>
          <p>
            In exchange for the release of Claims, Curiously Clean will provide
            Client its agreed upon services. In consideration of such access to
            the services and facilities, Client agrees to accept the access to
            Curiously Clean&apos;s services as full and complete settlement and
            satisfaction of any present and prospective claims. Further, Client
            hereby acknowledges and agrees that all sales and services provided
            by Curiously Clean are final and not refundable.
          </p>
        </Container>
      </Section>
    </Main>
  );
}
