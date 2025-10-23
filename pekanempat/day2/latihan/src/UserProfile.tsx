import React, { useState, useReducer } from "react"

// -------------------- Types --------------------
interface UserProfile {
  id: number
  personalInfo: {
    firstName: string
    lastName: string
    email: string
    avatar?: string
  }
  preferences: {
    theme: "light" | "dark" | "auto"
    notifications: boolean
    language: string
  }
  stats: {
    loginCount: number
    lastLogin: Date
    accountCreated: Date
  }
}

type UserAction =
  | { type: "UPDATE_PROFILE"; payload: Partial<UserProfile["personalInfo"]> }
  | { type: "UPDATE_PREFERENCES"; payload: Partial<UserProfile["preferences"]> }
  | { type: "INCREMENT_LOGIN_COUNT" }
  | { type: "RESET" }

// -------------------- State --------------------
const initialUser: UserProfile = {
  id: 1,
  personalInfo: {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
  },
  preferences: {
    theme: "light",
    notifications: true,
    language: "id",
  },
  stats: {
    loginCount: 0,
    lastLogin: new Date(),
    accountCreated: new Date(),
  },
}

function userReducer(state: UserProfile, action: UserAction): UserProfile {
  switch (action.type) {
    case "UPDATE_PROFILE":
      return {
        ...state,
        personalInfo: { ...state.personalInfo, ...action.payload },
      }
    case "UPDATE_PREFERENCES":
      return {
        ...state,
        preferences: { ...state.preferences, ...action.payload },
      }
    case "INCREMENT_LOGIN_COUNT":
      return {
        ...state,
        stats: {
          ...state.stats,
          loginCount: state.stats.loginCount + 1,
          lastLogin: new Date(),
        },
      }
    case "RESET":
      return initialUser
    default:
      return state
  }
}

// -------------------- Component --------------------
const UserProfile: React.FC = () => {
  const [user, dispatch] = useReducer(userReducer, initialUser)
  const [isEditing, setIsEditing] = useState(false)

  const handleProfileUpdate = (
    field: keyof UserProfile["personalInfo"],
    value: string
  ) => {
    dispatch({ type: "UPDATE_PROFILE", payload: { [field]: value } })
  }

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-50 py-10">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          User Profile
        </h2>

        {/* Personal Info */}
        <section className="mb-8">
          <h3 className="text-lg font-medium text-gray-700 mb-3">
            Personal Information
          </h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p>
              <span className="font-semibold text-gray-800">Name:</span>{" "}
              {user.personalInfo.firstName} {user.personalInfo.lastName}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Email:</span>{" "}
              {user.personalInfo.email}
            </p>
          </div>

          {isEditing ? (
            <div className="mt-4 space-y-3">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                value={user.personalInfo.firstName}
                onChange={(e) =>
                  handleProfileUpdate("firstName", e.target.value)
                }
                placeholder="First Name"
              />
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                value={user.personalInfo.email}
                onChange={(e) => handleProfileUpdate("email", e.target.value)}
                placeholder="Email"
              />
              <div className="flex gap-2 pt-2">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm"
                  onClick={() => setIsEditing(false)}
                >
                  Save
                </button>
                <button
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-sm"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button
              className="mt-3 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          )}
        </section>

        {/* Preferences */}
        <section className="mb-8">
          <h3 className="text-lg font-medium text-gray-700 mb-3">Preferences</h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p>
              <span className="font-semibold text-gray-800">Theme:</span>{" "}
              {user.preferences.theme}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Notifications:</span>{" "}
              {user.preferences.notifications ? "Enabled" : "Disabled"}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Language:</span>{" "}
              {user.preferences.language}
            </p>
          </div>
        </section>

        {/* Statistics */}
        <section>
          <h3 className="text-lg font-medium text-gray-700 mb-3">Statistics</h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p>
              <span className="font-semibold text-gray-800">Login Count:</span>{" "}
              {user.stats.loginCount}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Last Login:</span>{" "}
              {user.stats.lastLogin.toLocaleDateString()}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Member Since:</span>{" "}
              {user.stats.accountCreated.toLocaleDateString()}
            </p>
          </div>

          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md text-sm"
            onClick={() => dispatch({ type: "INCREMENT_LOGIN_COUNT" })}
          >
            Simulate Login
          </button>
        </section>
      </div>
    </div>
  )
}

export default UserProfile
