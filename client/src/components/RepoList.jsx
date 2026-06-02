import RepoCard from "./RepoCard";

function RepoList({ repos }) {
    return (
        <div>

            <div className="mb-8">

                <h2 className="text-5xl font-bold">
                    <span className="text-lime-400">
                        /
                    </span>{" "}
                    repositories
                </h2>

                <p className="text-gray-500 mt-2">
                    {repos.length} of {repos.length} loaded
                </p>

            </div>

            <div className="space-y-4">

                {repos.map((repo) => (
                    <RepoCard
                        key={repo.id}
                        repo={repo}
                    />
                ))}

            </div>

        </div>
    );
}

export default RepoList;