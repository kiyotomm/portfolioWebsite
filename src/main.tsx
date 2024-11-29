import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import router from "./components/routes.tsx";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// import theme from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </ChakraProvider>
  </StrictMode>
);
