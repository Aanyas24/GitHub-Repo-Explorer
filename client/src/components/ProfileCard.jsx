import {
    Users,
    BookOpen,
    ExternalLink,
    MapPin,
    Building2
} from "lucide-react";

function ProfileCard({
    user,
    languages
}) {

    const totalLanguages =
        Object.values(languages || {}).reduce(
            (a, b) => a + b,
            0
        );

    const topLanguages =
        Object.entries(languages || {})
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3);

    const colors = [
        "#5B6EE1",
        "#D08C1D",
        "#FF5A36"
    ];

    return (
        <div
            className="
      bg-[#09111f]
      border
      border-slate-800
      rounded-3xl
      p-6
      mb-10
      shadow-[0_0_40px_rgba(163,230,53,0.05)]
      "
        >

            <div className="grid lg:grid-cols-[2fr_1fr] gap-8 items-start">

                { }

                <div>

                    <div className="flex items-start gap-8">

                        <div className="relative">

                            <div
                                className="
                absolute
                inset-0
                bg-lime-400
                opacity-20
                blur-3xl
                rounded-full
                "
                            />

                            <img
                                src={user.avatar_url}
                                alt={user.login}
                                className="
                relative
                w-28
                h-28
                rounded-full
                border-2
                border-lime-400
                "
                            />

                        </div>

                        <div>

                            <h2 className="text-5xl font-bold text-white">
                                {user.name || user.login}
                            </h2>

                            <a
                                href={user.html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="
                text-lime-400
                flex
                items-center
                gap-1
                mt-2
                "
                            >
                                @{user.login}
                                <ExternalLink size={14} />
                            </a>

                            <div className="flex flex-wrap gap-6 mt-6 text-gray-400">

                                {user.company && (
                                    <span className="flex items-center gap-2">
                                        <Building2 size={14} />
                                        {user.company}
                                    </span>
                                )}

                                {user.location && (
                                    <span className="flex items-center gap-2">
                                        <MapPin size={14} />
                                        {user.location}
                                    </span>
                                )}

                            </div>

                        </div>

                    </div>

                    { }

                    <div className="grid grid-cols-3 gap-4 mt-8">

                        <div className="bg-[#050b14] border border-slate-800 rounded-xl p-5">

                            <Users size={14} />
                            FOLLOWERS

                            <h3 className="text-3xl font-bold mt-2">
                                {user.followers}
                            </h3>

                        </div>

                        <div className="bg-[#050b14] border border-slate-800 rounded-xl p-5">

                            <Users size={14} />
                            FOLLOWING

                            <h3 className="text-4xl font-bold mt-2">
                                {user.following}
                            </h3>

                        </div>

                        <div className="bg-[#050b14] border border-slate-800 rounded-xl p-5">

                            <BookOpen size={14} />
                            REPOS

                            <h3 className="text-4xl font-bold mt-2">
                                {user.public_repos}
                            </h3>

                        </div>

                    </div>

                </div>

                { }

                <div
                    className="
  bg-[#050b14]
  border
  border-slate-800
  rounded-xl
  p-5
  "
                >

                    <h3 className="text-xs tracking-[0.3em] text-gray-500 mb-5">
                        LANGUAGES
                    </h3>

                    <div className="space-y-4">

                        <div className="flex h-3 rounded-full overflow-hidden">

                            {topLanguages.map(([lang, count], index) => {

                                const percentage =
                                    Math.round(
                                        (count / totalLanguages) * 100
                                    );

                                return (
                                    <div
                                        key={lang}
                                        style={{
                                            width: `${percentage}%`,
                                            backgroundColor:
                                                colors[index]
                                        }}
                                    />
                                );

                            })}

                        </div>

                        {topLanguages.map(([lang, count], index) => {

                            const percentage =
                                Math.round(
                                    (count / totalLanguages) * 100
                                );

                            return (

                                <div
                                    key={lang}
                                    className="
        flex
        justify-between
        text-sm
        "
                                >

                                    <div className="flex items-center gap-2">

                                        <div
                                            className="w-2 h-2 rounded-full"
                                            style={{
                                                backgroundColor:
                                                    colors[index]
                                            }}
                                        />

                                        {lang}

                                    </div>

                                    <span>
                                        {percentage}%
                                    </span>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </div>
        </div>
    );
}

export default ProfileCard;