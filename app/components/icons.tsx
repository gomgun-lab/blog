import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export function Icons() {
  return (
    <div className="flex gap-2">
      <GitHubLogoIcon className="m-1 hover:bg-slate-500" />
      <LinkedInLogoIcon />
    </div>
  );
}
