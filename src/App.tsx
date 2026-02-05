import SessionProvider from "./provider/session-privider";
import RootRoute from "./root-route";

export default function App() {
  return (
    <SessionProvider>
      <RootRoute />
    </SessionProvider>
  );
}
