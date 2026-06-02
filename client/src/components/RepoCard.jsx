import {
    Star,
    GitBranch,
    ExternalLink
} from "lucide-react";

function RepoCard({ repo }) {
    return (
        <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="
      block
      w-full
      bg-[#09111f]
      border
      border-slate-800
      rounded-2xl
      p-5
      hover:border-lime-400
      transition-all
      duration-300
      "
        >
            <div className="flex justify-between items-start">

                <h3 className="text-lime-400 text-xl font-bold">
                    {repo.name}
                </h3>

                <ExternalLink size={18} />
            </div>

            <p className="text-gray-400 mt-3">
                {repo.description ||
                    "No description available"}
            </p>

            <div className="flex gap-5 mt-4 text-gray-400">

                <span>
                    {repo.language || "N/A"}
                </span>

                <span className="flex items-center gap-1">
                    <Star size={14} />
                    {repo.stargazers_count}
                </span>

                <span className="flex items-center gap-1">
                    <GitBranch size={14} />
                    {repo.forks_count}
                </span>

            </div>

            <p className="text-sm text-gray-500 mt-4">
                updated{" "}
                {new Date(
                    repo.updated_at
                ).toLocaleDateString()}
            </p>

        </a>
    );
}

export default RepoCard;