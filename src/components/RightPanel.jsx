export default function RightPanel({ children }) {
    return (
        <div className="sm:full sm:block lg:w-2/3 lg:relative left-1/3">
            {children}
        </div>
    );
}
