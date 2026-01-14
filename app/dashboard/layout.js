import AuthWrapper from "../(client)/_components/AuthWrapper/AuthWrapper";

export default function DashboardLayout({ children }) {
  return <AuthWrapper>{children}</AuthWrapper>
}
