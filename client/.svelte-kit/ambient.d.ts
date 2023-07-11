
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const LESSOPEN: string;
	export const npm_package_dev: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const XDG_SESSION_TYPE: string;
	export const GIT_ASKPASS: string;
	export const npm_node_execpath: string;
	export const npm_package_resolved: string;
	export const ROLLBAR: string;
	export const SHLVL: string;
	export const FLOW_ENV: string;
	export const CREATE_DEV_ADMIN_USER: string;
	export const npm_config_noproxy: string;
	export const AWS_KEY_ID: string;
	export const HOME: string;
	export const NODENV_ORIG_PATH: string;
	export const NODENV_HOOK_PATH: string;
	export const CHROME_DESKTOP: string;
	export const OLDPWD: string;
	export const npm_package_optional: string;
	export const TERM_PROGRAM_VERSION: string;
	export const DESKTOP_SESSION: string;
	export const PARALLEL_TEST_PROCESSORS: string;
	export const npm_package_json: string;
	export const npm_package_engines_node: string;
	export const GNOME_SHELL_SESSION_MODE: string;
	export const GTK_MODULES: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const npm_package_integrity: string;
	export const NODENV_VERSION: string;
	export const SYSTEMD_EXEC_PID: string;
	export const NO_REPLY_EMAIL: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const COLORTERM: string;
	export const COLOR: string;
	export const FLOW_DEV_HEADERS: string;
	export const NG_APP_PRODUCTION: string;
	export const npm_config_metrics_registry: string;
	export const DISABLE_ADVISORY_LOCKS: string;
	export const GTK_IM_MODULE: string;
	export const LOGNAME: string;
	export const npm_config_prefix: string;
	export const XDG_SESSION_CLASS: string;
	export const USERNAME: string;
	export const TERM: string;
	export const npm_config_cache: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const RBENV_SHELL: string;
	export const NODENV_ROOT: string;
	export const WINDOWPATH: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const SESSION_MANAGER: string;
	export const ROLLBAR_ENV: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const XDG_MENU_PREFIX: string;
	export const GNOME_TERMINAL_SCREEN: string;
	export const XDG_RUNTIME_DIR: string;
	export const GDK_BACKEND: string;
	export const EMAIL_CLIENTS: string;
	export const SWAGGER: string;
	export const SPECIAL_404_EXCEPTION: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const XMODIFIERS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const LS_COLORS: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const GNOME_TERMINAL_SERVICE: string;
	export const TERM_PROGRAM: string;
	export const npm_lifecycle_script: string;
	export const SSH_AGENT_LAUNCHER: string;
	export const SSH_AUTH_SOCK: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const SHELL: string;
	export const DATABASE_TRUNCATION: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const QT_ACCESSIBILITY: string;
	export const GDMSESSION: string;
	export const COVERBAND_AWS_S3: string;
	export const LESSCLOSE: string;
	export const AWS_SECRET_NAMES: string;
	export const AWS_SECRET: string;
	export const RAILS_ENV: string;
	export const npm_package_dev_optional: string;
	export const GPG_AGENT_INFO: string;
	export const SECRET_KEY_BASE: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const QT_IM_MODULE: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const npm_package_peer: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_DATA_DIRS: string;
	export const npm_config_global_prefix: string;
	export const NODENV_DIR: string;
	export const npm_command: string;
	export const VTE_VERSION: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		LESSOPEN: string;
		npm_package_dev: string;
		USER: string;
		npm_config_user_agent: string;
		XDG_SESSION_TYPE: string;
		GIT_ASKPASS: string;
		npm_node_execpath: string;
		npm_package_resolved: string;
		ROLLBAR: string;
		SHLVL: string;
		FLOW_ENV: string;
		CREATE_DEV_ADMIN_USER: string;
		npm_config_noproxy: string;
		AWS_KEY_ID: string;
		HOME: string;
		NODENV_ORIG_PATH: string;
		NODENV_HOOK_PATH: string;
		CHROME_DESKTOP: string;
		OLDPWD: string;
		npm_package_optional: string;
		TERM_PROGRAM_VERSION: string;
		DESKTOP_SESSION: string;
		PARALLEL_TEST_PROCESSORS: string;
		npm_package_json: string;
		npm_package_engines_node: string;
		GNOME_SHELL_SESSION_MODE: string;
		GTK_MODULES: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		npm_package_integrity: string;
		NODENV_VERSION: string;
		SYSTEMD_EXEC_PID: string;
		NO_REPLY_EMAIL: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		COLORTERM: string;
		COLOR: string;
		FLOW_DEV_HEADERS: string;
		NG_APP_PRODUCTION: string;
		npm_config_metrics_registry: string;
		DISABLE_ADVISORY_LOCKS: string;
		GTK_IM_MODULE: string;
		LOGNAME: string;
		npm_config_prefix: string;
		XDG_SESSION_CLASS: string;
		USERNAME: string;
		TERM: string;
		npm_config_cache: string;
		GNOME_DESKTOP_SESSION_ID: string;
		RBENV_SHELL: string;
		NODENV_ROOT: string;
		WINDOWPATH: string;
		npm_config_node_gyp: string;
		PATH: string;
		SESSION_MANAGER: string;
		ROLLBAR_ENV: string;
		NODE: string;
		npm_package_name: string;
		XDG_MENU_PREFIX: string;
		GNOME_TERMINAL_SCREEN: string;
		XDG_RUNTIME_DIR: string;
		GDK_BACKEND: string;
		EMAIL_CLIENTS: string;
		SWAGGER: string;
		SPECIAL_404_EXCEPTION: string;
		DISPLAY: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		XMODIFIERS: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		LS_COLORS: string;
		VSCODE_GIT_IPC_HANDLE: string;
		GNOME_TERMINAL_SERVICE: string;
		TERM_PROGRAM: string;
		npm_lifecycle_script: string;
		SSH_AGENT_LAUNCHER: string;
		SSH_AUTH_SOCK: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		SHELL: string;
		DATABASE_TRUNCATION: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		QT_ACCESSIBILITY: string;
		GDMSESSION: string;
		COVERBAND_AWS_S3: string;
		LESSCLOSE: string;
		AWS_SECRET_NAMES: string;
		AWS_SECRET: string;
		RAILS_ENV: string;
		npm_package_dev_optional: string;
		GPG_AGENT_INFO: string;
		SECRET_KEY_BASE: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		QT_IM_MODULE: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		npm_package_peer: string;
		PWD: string;
		npm_execpath: string;
		XDG_CONFIG_DIRS: string;
		XDG_DATA_DIRS: string;
		npm_config_global_prefix: string;
		NODENV_DIR: string;
		npm_command: string;
		VTE_VERSION: string;
		INIT_CWD: string;
		EDITOR: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
