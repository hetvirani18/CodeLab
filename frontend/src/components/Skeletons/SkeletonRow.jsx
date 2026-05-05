export default function SkeletonRow() {
  return (
    <tr className="border-b border-base-content/5">
      <td className="py-3.5 pl-5 pr-2"><div className="w-4 h-4 rounded-full bg-base-content/10 animate-pulse" /></td>
      <td className="py-3.5 pr-4"><div className="h-4 bg-base-content/10 rounded-md animate-pulse w-48" /></td>
      <td className="py-3.5 pr-4 hidden md:table-cell"><div className="h-5 bg-base-content/10 rounded-full animate-pulse w-20" /></td>
      <td className="py-3.5 pr-4 hidden sm:table-cell"><div className="h-4 bg-base-content/10 rounded-md animate-pulse w-12" /></td>
      <td className="py-3.5 pr-4"><div className="h-5 bg-base-content/10 rounded-full animate-pulse w-16" /></td>
      <td className="py-3.5 pr-5" />
    </tr>
  );
}