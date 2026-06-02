import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import RepoList from "./components/RepoList";

function App() {

  const [user, setUser] = useState(null);

  const [repos, setRepos] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [sortBy, setSortBy] = useState("stars");

  const [languages, setLanguages] = useState({});

  const [recent, setRecent] = useState(
    JSON.parse(
      localStorage.getItem("recent")
    ) || []
  );

  const searchUser = async (username) => {

    try {

      setLoading(true);
      setError("");

      const response = await axios.get(
        `https://github-repo-explorer-api-2m1s.onrender.com/api/github/${username}`
      );

      setUser(response.data.profile);

      setRepos(response.data.repos);

      const languageCount = {};

      response.data.repos.forEach((repo) => {
        if (repo.language) {
          languageCount[repo.language] =
            (languageCount[repo.language] || 0) + 1;
        }
      });

      setLanguages(languageCount);

      const updatedRecent = [
        username,
        ...recent.filter(
          (item) => item !== username
        ),
      ].slice(0, 5);

      setRecent(updatedRecent);

      localStorage.setItem(
        "recent",
        JSON.stringify(updatedRecent)
      );

    } catch (err) {

      if (err.response?.status === 404) {
        setError("GitHub user not found");
      } else {
        setError("Something went wrong");
      }

      setUser(null);
      setRepos([]);
    } finally {

      setLoading(false);

    }
  };

  const sortedRepos = [...repos].sort((a, b) => {
    if (sortBy === "stars") {
      return b.stargazers_count - a.stargazers_count;
    }

    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "updated") {
      return (
        new Date(b.updated_at) -
        new Date(a.updated_at)
      );
    }

    return 0;
  });

  return (
    <div className="min-h-screen bg-[#050b14] text-white font-mono">

      <div
        className="
  absolute
  top-10
  left-10
  w-72
  h-72
  bg-lime-500
  opacity-10
  blur-[120px]
  pointer-events-none
  "
      />
      { }
      <div
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
        `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-8 py-10 relative z-10">

        { }

        <div className="mb-16">

          <p className="text-lime-400 text-sm tracking-[0.3em] mb-6">
            {">"} GH-EXPLORER --INIT _
          </p>

          <h1 className="text-7xl font-bold leading-tight max-w-6xl">

            Explore any

            <span className="text-lime-400">
              {" "}GitHub{" "}
            </span>

            profile

          </h1>

          <p className="text-gray-400 mt-6 text-2xl max-w-4xl leading-relaxed">
            Type a handle. Search GitHub users through our
            cached backend API and explore repositories.
          </p>

        </div>

        { }

        <SearchBar onSearch={searchUser} />

        { }

        {recent.length > 0 && (
          <div className="flex items-center gap-3 mt-6 mb-10 flex-wrap">

            <span className="text-gray-500 uppercase text-sm tracking-widest">
              Recent
            </span>

            {recent.map((item) => (
              <button
                key={item}
                onClick={() => searchUser(item)}
                className="
px-3
py-1
text-sm
rounded-md
bg-[#0b1420]
border
border-slate-700
hover:border-lime-400
transition
"
              >
                @{item}
              </button>
            ))}
          </div>
        )}

        { }

        {loading && (
          <div className="flex justify-center py-12">
            <div className="w-12 h-12 border-4 border-lime-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        { }

        {error && (
          <div className="bg-red-500/10 border border-red-500 p-4 rounded-xl mb-8">
            {error}
          </div>
        )}

        { }

        {user && (
          <>
            <ProfileCard
              user={user}
              languages={languages}
            />

            <div className="flex justify-end mb-6">

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="
              bg-[#0b1420]
              border
              border-slate-700
              rounded-xl
              px-4
              py-2
              text-white
              "
              >
                <option value="stars">
                  stars
                </option>

                <option value="updated">
                  updated
                </option>

                <option value="name">
                  name
                </option>

              </select>

            </div>
          </>
        )}

        { }

        {repos.length > 0 && (
          <>
            <RepoList repos={sortedRepos} />
          </>
        )}

        {!user && !loading && (
          <div
            className="
    mt-16
    border
    border-slate-800
    rounded-3xl
    bg-[#09111f]/50
    backdrop-blur-sm
    h-[280px]
    flex
    flex-col
    items-center
    justify-center
    "
          >
            <div className="text-6xl text-slate-500 mb-6">
              {"</>"}
            </div>

            <p className="text-gray-400 text-lg">
              Try{" "}
              <button
                onClick={() => searchUser("torvalds")}
                className="text-lime-400 hover:underline"
              >
                @torvalds
              </button>

              ,{" "}

              <button
                onClick={() => searchUser("gaearon")}
                className="text-lime-400 hover:underline"
              >
                @gaearon
              </button>

              , or{" "}

              <button
                onClick={() => searchUser("sindresorhus")}
                className="text-lime-400 hover:underline"
              >
                @sindresorhus
              </button>
            </p>
          </div>
        )}

        <footer
          className="
  mt-24
  border-t
  border-slate-800
  pt-8
  pb-6
  "
        >

          <div className="text-center">

            <p className="text-lime-400 mb-2">
              {">"} GH-EXPLORER --RUNNING
            </p>

            <p className="text-gray-500 text-sm">
              Powered by React • Express • GitHub API
            </p>

            <p className="text-gray-600 text-xs mt-2">
              Built by Aanya Sukhija
            </p>

          </div>

        </footer>

      </div>
    </div>

  );
}

export default App;