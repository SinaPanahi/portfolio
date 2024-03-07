export default function Timeline({ endDate, startDate }) {
    return (
        <div className="relative bottom-4 flex flex-col justify-between items-center h-full">
            <p className="text-center">{endDate}</p>
            <div className="flex-1 w-1 bg-slate-300 rounded"></div>
            <p className="text-center">{startDate}</p>
        </div>
    );
}
