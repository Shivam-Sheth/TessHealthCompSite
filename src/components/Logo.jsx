export default function Logo({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#0F766E" />
      <rect x="14" y="14" width="16" height="16" rx="3" fill="#5EEAD4" />
      <rect x="34" y="14" width="16" height="16" rx="3" fill="#99F6E4" />
      <rect x="14" y="34" width="16" height="16" rx="3" fill="#99F6E4" />
      <rect x="34" y="34" width="16" height="16" rx="3" fill="#2DD4BF" />
    </svg>
  );
}
