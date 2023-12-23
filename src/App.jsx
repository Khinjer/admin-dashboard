import "./App.css";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import { useMode, ColorModeContext } from "./theme";
import Box from "@mui/material/Box";

import Dashboard from "./scenes/Dashboard";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/Team";
import Invoices from "./scenes/Invoices";
import Contacts from "./scenes/Contacts";
import Form from "./scenes/Form";
import Line from "./scenes/Line";
import Pie from "./scenes/Pie";
import Geography from "./scenes/Geography";
import Calendar from "./scenes/Calendar";
import Faq from "./scenes/Faq";
import Bar from "./scenes/Bar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/form" element={<Form />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
