export default function TabButton({ children, onAction }) {
  return (
    <li>
      <button onClick={onAction}>{children}</button>
    </li>
  );
}
