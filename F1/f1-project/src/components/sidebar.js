const Sidebar = () => {
  return (
    <aside className="row-start-1 flex flex-col gap-4 items-center sm:items-start">
      <div className="flex flex-col gap-4 items-center sm:items-start">
        <a href="/" className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">F1 Project</h1>
        </a>
        <nav className="flex flex-col gap-2 items-center sm:items-start">
          <a href="/" className="text-lg font-bold flex items-center gap-2">
            <i className="fas fa-home"></i>
            Home
          </a>
          <a
            href="/standings"
            className="text-lg font-bold flex items-center gap-2"
          >
            <i className="fas fa-trophy"></i>
            Standings
          </a>
          <a
            href="/drivers"
            className="text-lg font-bold flex items-center gap-2"
          >
            <i className="fas fa-user"></i>
            Drivers
          </a>
          <a
            href="/teams"
            className="text-lg font-bold flex items-center gap-2"
          >
            <i className="fas fa-users"></i>
            Teams
          </a>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
