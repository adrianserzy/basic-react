export default function TabButton({ children, onAction, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onAction}>
        {children}
      </button>
    </li>
  );
}
