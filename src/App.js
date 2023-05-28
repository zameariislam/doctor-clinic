import { RouterProvider } from "react-router-dom";
import router from "./Routes/routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">

      <RouterProvider router={router} />
      <Toaster/>
    </div>
  )
}

export default App;
