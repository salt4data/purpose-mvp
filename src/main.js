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

  document.querySelector("#app").innerHTML = `
    <h1>Purpose MVP</h1>
    <h2>Black-Owned Businesses</h2>

    <ul>
      ${data.map(BusinessCard).join("")}
    </ul>
  `;
}

loadBusinesses();