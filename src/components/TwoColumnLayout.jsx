export default function TwoColumnLayout({ children }) {
    return (
        <div className="grid grid-cols-2 pointer-events-auto text-gray-900 col-start-2 col-end-4">
            {children}
        </div>
    );
}
