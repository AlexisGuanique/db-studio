import { serviceLevels, comparisonFeatures } from "@/lib/serviceLevels";

export function ServiceComparisonTable() {
  return (
    <div className="comparison-table overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b-2 border-burgundy/20">
            <th className="p-3 font-semibold uppercase text-burgundy">Feature</th>
            {serviceLevels.map((level) => (
              <th key={level.slug} className="p-3 font-semibold text-burgundy">
                L{level.id}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-burgundy/10">
            <td className="p-3 font-medium">Price</td>
            {serviceLevels.map((level) => (
              <td key={level.slug} className="p-3 text-text-secondary">
                {level.price}
                {level.priceSuffix}
              </td>
            ))}
          </tr>
          {comparisonFeatures.slice(1).map((row) => (
            <tr key={row.label} className="border-b border-burgundy/10">
              <td className="p-3 font-medium">{row.label}</td>
              {"levels" in row &&
                row.levels.map((val, i) => (
                  <td key={serviceLevels[i].slug} className="p-3 text-text-secondary">
                    {typeof val === "boolean"
                      ? val
                        ? "✓"
                        : "—"
                      : val === 0
                        ? "—"
                        : String(val)}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
