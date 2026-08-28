export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Oslo Girl Social. All rights reserved.</p>
        <p>Oslo, Norway</p>
      </div>
    </footer>
  );
}
