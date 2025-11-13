import React, { useMemo, useState } from "react";
import { Star, Users, MapPin } from "lucide-react";

/**
 * FindPeers.jsx
 * - Paste into src/components/
 * - Use inside App when activePage === "peers"
 */

const MOCK_PEERS = [
  {
    id: 1,
    name: "Jessica Lee",
    title: "Full Stack Developer",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4.9,
    reviews: 127,
    status: "online",
    teach: ["Node.js", "MongoDB", "GraphQL"],
    learn: ["UI Design", "Figma"],
    location: "San Francisco, CA",
    tz: "PST",
  },
  {
    id: 2,
    name: "Michael Torres",
    title: "Data Scientist",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5.0,
    reviews: 89,
    status: "away",
    teach: ["Python", "ML", "TensorFlow"],
    learn: ["React", "TypeScript"],
    location: "Austin, TX",
    tz: "CST",
  },
  {
    id: 3,
    name: "Sophia Kim",
    title: "UX/UI Designer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.8,
    reviews: 156,
    status: "online",
    teach: ["Figma", "Design Systems", "Prototyping"],
    learn: ["Animation", "3D Design"],
    location: "New York, NY",
    tz: "EST",
  },
  {
    id: 4,
    name: "Daniel Park",
    title: "Frontend Engineer",
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    rating: 4.7,
    reviews: 68,
    status: "online",
    teach: ["React", "TypeScript", "CSS"],
    learn: ["Design Systems", "Accessibility"],
    location: "Seattle, WA",
    tz: "PST",
  },
  {
    id: 5,
    name: "Aisha Khan",
    title: "Mobile Developer",
    avatar: "https://randomuser.me/api/portraits/women/24.jpg",
    rating: 4.6,
    reviews: 42,
    status: "busy",
    teach: ["React Native", "Expo", "Animations"],
    learn: ["Backend APIs", "GraphQL"],
    location: "Chicago, IL",
    tz: "CST",
  },
];

export default function FindPeers() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all"); // all / online / away / busy
  const [skillFilter, setSkillFilter] = useState("");
  const [perPage, setPerPage] = useState(6);
  const [page, setPage] = useState(1);

  const allSkills = useMemo(() => {
    const s = new Set();
    MOCK_PEERS.forEach((p) => p.teach.forEach((t) => s.add(t)));
    return Array.from(s);
  }, []);

  const filtered = useMemo(() => {
    let data = MOCK_PEERS.slice();

    if (query.trim()) {
      const q = query.toLowerCase();
      data = data.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.title.toLowerCase().includes(q) ||
          p.teach.join(" ").toLowerCase().includes(q) ||
          p.learn.join(" ").toLowerCase().includes(q)
      );
    }

    if (statusFilter !== "all") {
      data = data.filter((p) => p.status === statusFilter);
    }

    if (skillFilter) {
      data = data.filter((p) => p.teach.includes(skillFilter));
    }

    return data;
  }, [query, statusFilter, skillFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const pageData = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Find Peers
          </h1>
          <p className="text-gray-500 mt-1">
            Discover peers to learn with — filter by skills, availability, and
            ratings.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
          <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-100 px-3 py-2 w-full md:w-[420px]">
            <input
              className="flex-1 outline-none text-sm md:text-base"
              placeholder="Search by name, skill, or title..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
            />
            <button
              onClick={() => {
                setQuery("");
                setPage(1);
              }}
              className="text-sm text-gray-500 px-2"
            >
              Clear
            </button>
          </div>

          <div className="flex items-center gap-2">
            <select
              className="rounded-lg border border-gray-100 px-3 py-2 text-sm md:text-base bg-white"
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setPage(1);
              }}
            >
              <option value="all">All status</option>
              <option value="online">Online</option>
              <option value="away">Away</option>
              <option value="busy">Busy</option>
            </select>

            <select
              className="rounded-lg border border-gray-100 px-3 py-2 text-sm md:text-base bg-white"
              value={skillFilter}
              onChange={(e) => {
                setSkillFilter(e.target.value);
                setPage(1);
              }}
            >
              <option value="">All skills</option>
              {allSkills.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pageData.map((peer) => (
          <PeerCard key={peer.id} peer={peer} />
        ))}

        {pageData.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-12 bg-white rounded-2xl border border-gray-100">
            No peers found. Try adjusting your filters.
          </div>
        )}
      </div>

      {/* Pagination & per-page controls */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Showing <span className="font-medium">{(page - 1) * perPage + 1}</span>{" "}
          to{" "}
          <span className="font-medium">
            {Math.min(page * perPage, filtered.length)}
          </span>{" "}
          of <span className="font-medium">{filtered.length}</span> peers
        </div>

        <div className="flex items-center gap-3">
          <label className="text-sm text-gray-500">Per page:</label>
          <select
            value={perPage}
            onChange={(e) => {
              setPerPage(Number(e.target.value));
              setPage(1);
            }}
            className="border border-gray-100 rounded-lg px-2 py-1 text-sm"
          >
            <option value={6}>6</option>
            <option value={9}>9</option>
            <option value={12}>12</option>
          </select>

          <nav className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1 rounded-md border border-gray-200 bg-white disabled:opacity-50"
            >
              Prev
            </button>
            <span className="text-sm">
              {page} / {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-1 rounded-md border border-gray-200 bg-white disabled:opacity-50"
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

/* ----- PeerCard (inline - matches theme) ----- */
const PeerCard = ({ peer }) => {
  const {
    avatar,
    name,
    title,
    rating,
    reviews,
    status,
    teach,
    learn,
    location,
    tz,
  } = peer;

  const statusColor =
    status === "online" ? "bg-green-100 text-green-700" : status === "away" ? "bg-gray-200 text-gray-600" : "bg-orange-100 text-orange-700";

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 hover:shadow-md transition">
      <div className="flex items-start gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
        />
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">{name}</h3>
              <p className="text-sm text-gray-500">{title}</p>
            </div>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColor}`}>{status}</span>
          </div>

          <div className="mt-3 flex items-center gap-3 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Star size={14} className="text-yellow-400" /> <span className="font-medium">{rating}</span>
            </span>
            <span className="text-gray-400">({reviews} reviews)</span>
            <span className="flex items-center gap-1 ml-auto text-gray-400">
              <MapPin size={14} /> {location}
              <span className="mx-1">•</span> {tz}
            </span>
          </div>

          <div className="mt-4">
            <div className="text-xs font-semibold text-gray-600 mb-2">CAN TEACH</div>
            <div className="flex flex-wrap gap-2">
              {teach.map((s, i) => (
                <span key={i} className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-md">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-3">
            <div className="text-xs font-semibold text-gray-600 mb-2">WANTS TO LEARN</div>
            <div className="flex flex-wrap gap-2">
              {learn.map((s, i) => (
                <span key={i} className="bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded-md">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <button className="flex-1 bg-purple-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center justify-center gap-2">
              <Users size={14} /> Connect
            </button>
            <button className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
              👤
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
