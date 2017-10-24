const constants = {
	// admin only
	ADD_TASK: 'ADD_TASK',
	UPDATE_TASK: 'UPDATE_TASK',
	DELETE_TASK: 'DELETE_TASK',
	VIEW_TASK: 'VIEW_TASK',
	LIST_ALL_TASKS: 'LIST_ALL_TASKS',

	// todo later
	// IMPORT_SCHOOL_TERMS: 'IMPORT_SCHOOL_TERMS',
	// LIST_SCHOOL_TERMS: 'LIST_SCHOOL_TERMS',
	// UPDATE_SCHOOL_TERM: 'UPDATE_SCHOOL_TERM',
	// IMPORT_PUBLIC_HOLIDAYS: 'IMPORT_PUBLIC_HOLIDAYS',
	// LIST_PUBLIC_HOLIDAYS: 'LIST_PUBLIC_HOLIDAYS',
	// UPDATE_PUBLIC_HOLIDAY: 'UPDATE_PUBLIC_HOLIDAY',
	// FETCH_COMMUNITY_TASKS: 'FETCH_COMMUNITY_TASKS',
	// LIST_COMMUNITY_TASKS: 'LIST_COMMUNITY_TASKS',
	// ADD_COMMUNITY_TASKS: 'ADD_COMMUNITY_TASKS',
	// RATE_COMMUNITY_TASK: 'RATE_COMMUNITY_TASK',
	// UPLOAD_TASK_TO_COMMUNITY: 'UPLOAD_TASK_TO_COMMUNITY',

	// no user interaction
	AUTO_SCHEDULE_TASK: 'AUTO_SCHEDULE_TASK',
	AUTO_REMOVE_SCHEDULED_TASKS: 'AUTO_REMOVE_SCHEDULED_TASKS',
	// is today a school day, a public holiday, a school holiday, etc.
	AUTO_SET_TODAYS_METADATA: 'AUTO_SET_TODAYS_METADATA',


	// user specific
	LIST_SCHEDULED_TASKS: 'LIST_SCHEDULED_TASKS',
	VIEW_SCHEDULED_TASK: 'VIEW_SCHEDULED_TASK',
	FILTER_SCHEDULED_TASKS: 'FILTER_SCHEDULED_TASKS',

	CREATE_ACTIVITY: 'CREATE_ACTIVITY', // AKA complete task
	APPROVE_ACTIVITY: 'APPROVE_ACTIVITY', // approver only
	UPDATE_APPROVED_ACTIVITY: 'UPDATE_APPROVED_ACTIVITY', // approver only
	LIST_ACTIVITIES: 'LIST_ACTIVITIES', // user specific
	FILTER_LISTED_ACTIVITIES: 'FILTER_LISTED_ACTIVITIES'

	// notify approver when a task activity needs to be reviewed and approved
	NOTIFY_APPROVER: 'NOTIFY_APPROVER',

	ADD_USER: 'ADD_USER',
	UPDATE_USER: 'UPDATE_USER',
	DELETE_USER: 'DELETE_USER',
	LIST_USERS: 'LIST_USERS',
	VIEW_USER: 'VIEW_USER', // owner or admin

	UPDATE_HOUSEHOLD: 'UPDATE_HOUSEHOLD',
	VIEW_HOUSEHOLD: 'VIEW_HOUSEHOLD',
	ADD_SCHOOL_TERM: 'ADD_SCHOOL_TERM',
	UPDATE_SCHOOL_TERM: 'UPDATE_SCHOOL_TERM',

	ADD_ERROR: 'ADD_ERROR',
	REMOVE_ERROR: 'REMOVE_ERROR'
}

export default constants;