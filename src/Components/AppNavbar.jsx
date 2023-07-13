import { useState, useTransition } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDebounce } from "../hooks/use-debounce";
import { siteConfig } from "../config/site";
import Wrapper from "./Wrapper";

const AppNavbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const [isPending, startTransition] = useTransition();
  const Seacrh = () => {
    if (debouncedQuery.length > 0) {
      startTransition(() => {
        navigate(`/search/${debouncedQuery}`);
        setQuery("");
      });
    }
  };
  const searchWithEnter = (e) => {
    if (e.key === "Enter" && debouncedQuery.length > 0) {
      Seacrh();
    }
  };

  return (
    <div className="navbar bg-base-100 sticky top-0 z-[5000]">
      <Wrapper className="flex flex-col md:flex-row space-y-2">
        <div className="flex-1 flex items-center">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            {siteConfig.name}
          </Link>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>Menu</summary>
                  <ul className="p-2 bg-base-100">
                    {siteConfig.mainNav.map((s, i) => (
                      <li key={i}>
                        <NavLink to={s.href}>{s.title}</NavLink>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="flex flex-row space-x-2">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full max-w-sm"
              disabled={isPending}
              onKeyDown={searchWithEnter}
              defaultValue={debouncedQuery}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              onClick={() => Seacrh()}
              disabled={isPending}
              className="btn"
            >
              Search
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AppNavbar;
