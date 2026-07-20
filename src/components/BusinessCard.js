export function BusinessCard(business) {
  return `
    <li>
      <strong>${business.business_name}</strong><br>
      <p>${business.description}</p>
      <p><strong>Category:</strong> ${business.category}</p>
      <p><strong>Location:</strong> ${business.city}, ${business.state}</p>
      <p><strong>Verified:</strong> ${business.is_verified ? "✅ Yes" : "❌ No"}</p>
      <a href="${business.website}" target="_blank">${business.website}</a>
    </li>
  `;
}