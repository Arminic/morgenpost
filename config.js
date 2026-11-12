// Morgenpost – Verbindung zu Supabase (Login + Daten)
// Beide Werte stehen im Supabase-Projekt unter Project Settings -> API (Data API / API Keys).
// Der Schlüssel ist der öffentliche „anon“- bzw. „publishable“-Schlüssel – NICHT den „service_role“/„secret“-Schlüssel eintragen!
window.MOPO_CONFIG = {
  supabaseUrl: '',   // z. B. https://abcdefghijklmnop.supabase.co
  supabaseKey: '',   // anon / publishable key
  pollSeconds: 20    // wie oft Änderungen anderer geladen werden
};
