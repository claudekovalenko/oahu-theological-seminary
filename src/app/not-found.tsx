import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">404</p>
      <h1 className="mt-3 text-4xl text-ocean-900">That page drifted out to sea.</h1>
      <Button href="/" className="mt-8">
        Back to shore
      </Button>
    </Container>
  );
}
