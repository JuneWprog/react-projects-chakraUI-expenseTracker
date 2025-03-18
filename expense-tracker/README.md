# Install 
https://v2.chakra-ui.com/getting-started/vite-guide

# React + Vite +tailWind + React Route + redux
## create react project with Vite
```
npm create vite@latest  my-app --template react
cd my-app
npm install
npm i @chakra-ui/react@2 @emotion/react @emotion/styled framer-motion
npm install react-apexcharts
npm run dev
```
@chakra-ui/react → The core Chakra UI package

@emotion/react & @emotion/styled → Required for styling

framer-motion → Used for animations

Wrap your app with Chakra’s ChakraProvider (in main.jsx or main.tsx)
```
<React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
```
import { Button, Box, Text } from "@chakra-ui/react";




