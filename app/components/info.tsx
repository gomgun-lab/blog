import { PROFILE_INFO } from "@/constants/profile";

export function Info() {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6 li">{PROFILE_INFO}</p>
  );
}
