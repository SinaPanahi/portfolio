export default function ThreeColumnLayout({ children }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 pointer-events-auto text-gray-900 bg-red-600">
            {children}
        </div>
    );
}
