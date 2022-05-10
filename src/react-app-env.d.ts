/// <reference types="react-scripts" />
type InterDaoNotification = {
  type: "error" | "warning" | "success" | "info";
  description: string;
  onClick?: () => void;
};
interface Window {
  // Utility
  notify: ({ type, description, onClick }: InterDaoNotification) => void;
}
/**
 * Declare namespace
 */

declare namespace JSX {
  interface IntrinsicElements {
    "ion-icon": any;
  }
}
