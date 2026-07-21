export function BusinessCard(business) {
  let tags = "None";

  if (Array.isArray(business.tags)) {
    tags = business.tags.join(", ");
  } else if (typeof business.tags === "string") {
    tags = business.tags
      .replace("{", "")
      .replace("}", "")
      .split(",")
      .join(", ");
  }

  return `
    <li>
      <strong>${business.business_name}</strong>

      <p>${business.description}</p>

      <p><strong>Category:</strong> ${business.category}</p>

      <p><strong>Location:</strong> ${business.city}, ${business.state}</p>

      <p><strong>Verified:</strong> ${
        business.is_verified ? "✅ Yes" : "❌ No"
      }</p>

      <p><strong>Tags:</strong> ${tags}</p>

      <a href="${business.website}" target="_blank">
        ${business.website}
      </a>
    </li>
  `;
}