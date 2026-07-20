import "./style.css";
import { supabase } from "./supabase";
import { BusinessCard } from "./components/BusinessCard";

async function loadBusinesses() {
  const { data, error } = await supabase
    .from("businesses")
    .select("*");

  if (error) {
    console.error(error);
    return;
  }

  const businesses = data;

  function render(list, search = "") {
    document.querySelector("#app").innerHTML = `
      <h1>Purpose MVP</h1>
      <h2>Black-Owned Businesses</h2>

      <input
        type="text"
        id="search"
        placeholder="🔍 Search businesses..."
        style="
          width: 100%;
          padding: 12px;
          margin: 20px 0;
          border-radius: 8px;
          border: 1px solid #4b5563;
          background: #1f2937;
          color: white;
          font-size: 16px;
          box-sizing: border-box;
        "
      />

      ${
        list.length === 0
          ? `<p>No businesses found.</p>`
          : `
            <ul>
              ${list.map(BusinessCard).join("")}
            </ul>
          `
      }
    `;

    const searchInput = document.querySelector("#search");
    searchInput.value = search;
    searchInput.focus();

    searchInput.addEventListener("input", (event) => {
      const search = event.target.value.toLowerCase();

      const filtered = businesses.filter((business) => {
        const text = `
          ${business.business_name}
          ${business.description}
          ${business.category}
        `.toLowerCase();

        return text.includes(search);
      });

      render(filtered, search);
    });
  }

  render(businesses);
}

loadBusinesses();