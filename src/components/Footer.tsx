export default function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-foreground bg-card">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} The Girl Social. Made with{" "}
          <span className="text-accent">♥</span> for Oslo.
        </p>
        <p>Oslo, Norway</p>
      </div>
    </footer>
  );
}
