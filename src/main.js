import "./style.css";
import { supabase } from "./supabase";

async function loadBusinesses() {
  const { data, error } = await supabase
    .from("businesses")
    .select("*");

  if (error) {
    console.error(error);
    return;
  }

  document.querySelector("#app").innerHTML = `
    <h1>Purpose MVP</h1>
    <h2>Black-Owned Businesses</h2>

    <ul>
      ${data
        .map(
          (business) => `
          <li>
            <strong>${business.business_name}</strong><br>
            <p>${business.description}</p>
            <p><strong>Category:</strong> ${business.category}</p>
            <p><strong>Location:</strong> ${business.city}, ${business.state}</p>
            <p><strong>Verified:</strong> ${business.is_verified ? "✅ Yes" : "❌ No"}</p>
            <a href="${business.website}" target="_blank">${business.website}</a>
          </li>
        `
        )
        .join("")}
    </ul>
  `;
}

loadBusinesses();