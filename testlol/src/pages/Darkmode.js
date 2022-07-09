import React,{ useState } from "react";
import { Switch, useDarkreader } from "react-darkreader";

export default function Darkmode() {
  const [dark, setDark] = useState(localStorage.getItem("dark") === "true");

  const [isDark, { toggle }] = useDarkreader(dark);
  return (
    <div className="Darkmode">
      <Switch
        checked={isDark}
        onChange={(state) => {
          toggle(state);
          localStorage.setItem("dark", state);
        }}
      />
    </div>
  );
}
