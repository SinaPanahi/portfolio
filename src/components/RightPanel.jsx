export default function RightPanel({ children }) {
    return (
        <div className="sm:full sm:block lg:w-3/5 lg:relative float-right">
            {children}
        </div>
    );
}
