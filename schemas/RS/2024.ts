interface RedditPost_2024 {
	_meta?: {
		corrupted_selftext?: string,
		edited_title?: string,
		is_edited?: boolean,
		note?: "no_2nd_retrieval"|"initially_unavailable",
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops",
		retrieved_2nd_on?: number,
		was_deleted_later?: boolean,
		was_initially_deleted?: boolean,
	},
	ad_business?: null,
	ad_promoted_user_posts?: null|{
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_flair_background_color: null|"#dadada"|"#ff4500"|""|"#1a1a1b"|"#0c173e"|"transparent",
		author_flair_css_class: null|"staff"|"108"|"TheLeague1"|"blueflair"|"logo",
		author_flair_richtext: {
			a?: ":108:"|":Eagles:",
			e: "text"|"emoji",
			t?: "Employee"|"r/Movies contributor"|" Gary?"|"Founder & CEO 🚀"|" Eagles",
			u?: string,
		}[],
		author_flair_template_id: null|"cfbf8436-fc09-11ea-831e-0e3ffcf5271b"|"fd9a0198-1b0d-11e5-875d-0e29e4c0cc07"|"5661551c-3c90-11e5-9c8e-0ec07e44b9c3"|"7a712216-64d9-11e7-8803-0e2d9340df48"|"94ae63a4-a632-11ee-b9d1-d2c64dc70d44"|"59ced398-7db5-11eb-9849-0edbd6a93433"|"0ae60c22-0f94-11eb-af82-0ebaaf71a0d3"|"a2fa6764-6564-11e4-9cec-12313d0568ea",
		author_flair_text: null|"Employee"|"r/Movies contributor"|":108: Gary?"|"The League"|"we cancellin’ christmas"|"411"|"Founder & CEO 🚀"|":Eagles: Eagles"|"19' Forester Premium"|"'09 XT",
		author_flair_text_color: null|"dark"|"light",
		author_flair_type: "text"|"richtext",
		author_fullname: string,
		author_is_blocked: boolean,
		author_patreon_flair: boolean,
		author_premium: boolean,
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null,
		clicked: boolean,
		content_categories: null,
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null,
		distinguished: null,
		domain: "i.redd.it"|"self.dataannotation"|"youtube.com"|"v.redd.it"|"youtu.be"|"reddit.com"|"self.Ulta"|"theguardian.com"|"self.USMobile"|"nfl.com"|"cnbc.com"|"self.NootropicsDepot",
		downs: number,
		edited: boolean|number,
		gallery_data?: {
			items: {
				caption?: string,
				id: number,
				media_id: "hoo0fdvjnslc1"|"8dlqmlpknslc1"|"a7rdcig4qnmc1"|"tls53ig4qnmc1"|"gkzbrig4qnmc1"|"gpu8mig4qnmc1"|"d9c29ig4qnmc1",
			}[],
		},
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean,
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: ""|"#ccac2b"|"#dadada"|"#58c2fd"|"#50caad"|"#ff66ac"|"#82bad9"|"#00a6a5"|"#0079d3"|null,
		link_flair_css_class: null|""|"two"|"media"|"trailer"|"poster"|"vid"|"review"|"discussion"|"stacks"|"compare",
		link_flair_richtext: {
			a?: ":Review:"|":Discussion:"|":Stacks:"|":Comparison:",
			e: "text"|"emoji",
			t?: "Haul"|"Discussion"|"Customer"|"Media"|"Trailer"|"Poster"|"Fallout TV"|"Video"|"Feedback 🙂"|"Announcement 📢"|"Review "|"Discussion "|"Stacks "|"Comparison ",
			u?: string,
		}[],
		link_flair_template_id?: string,
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name: "Prime Video"|"STARZ"|"Matthew Heiskell",
				author_url: "https://www.youtube.com/@PrimeVideo"|"https://www.youtube.com/@Starz"|"https://www.youtube.com/@MatthewHeiskell",
				height: number,
				html: string,
				provider_name: "YouTube",
				provider_url: "https://www.youtube.com/",
				thumbnail_height: number,
				thumbnail_url: string,
				thumbnail_width: number,
				title: string,
				type: "video",
				version: "1.0",
				width: number,
			},
			reddit_video?: {
				bitrate_kbps: number,
				dash_url: string,
				duration: number,
				fallback_url: string,
				has_audio: boolean,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			},
			type?: "youtube.com",
		},
		media_embed: {
			content?: string,
			height?: number,
			scrolling?: boolean,
			width?: number,
		},
		media_metadata?: {
			[key: string]: {
				e: "Image",
				id: "8dlqmlpknslc1"|"hoo0fdvjnslc1"|"a7rdcig4qnmc1"|"d9c29ig4qnmc1"|"gkzbrig4qnmc1"|"gpu8mig4qnmc1"|"tls53ig4qnmc1"|"9h2duo85xayc1",
				m: "image/jpg",
				p: {
					u: string,
					x: number,
					y: number,
				}[],
				s: {
					u: string,
					x: number,
					y: number,
				},
				status: "valid",
			},
		},
		media_only: boolean,
		mod_note: null,
		mod_reason_by: null,
		mod_reason_title: null,
		mod_reports: [],
		name: string,
		no_follow: boolean,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: "all_ads"|null,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: "27442307"|"27442308"|"27442309"|"27442310"|"27442311"|"27442312",
				text: "Shilajit"|"L-Arginine + L-Citrulline together"|"Pregnenolone"|"N-Acetyl L-Tyrosine"|"Boron Glycinate"|"Cistanche tubulosa",
				vote_count: number,
			}[],
			prediction_status: null,
			resolved_option_id: null,
			total_stake_amount: null,
			total_vote_count: number,
			tournament_id: null,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		},
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self",
		preview?: {
			enabled: boolean,
			images: {
				id: string,
				resolutions: {
					height: number,
					url: string,
					width: number,
				}[],
				source: {
					height: number,
					url: string,
					width: number,
				},
				variants: {
				},
			}[],
		},
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null,
		removed_by: null,
		removed_by_category: null,
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name: "Prime Video"|"STARZ"|"Matthew Heiskell",
				author_url: "https://www.youtube.com/@PrimeVideo"|"https://www.youtube.com/@Starz"|"https://www.youtube.com/@MatthewHeiskell",
				height: number,
				html: string,
				provider_name: "YouTube",
				provider_url: "https://www.youtube.com/",
				thumbnail_height: number,
				thumbnail_url: string,
				thumbnail_width: number,
				title: string,
				type: "video",
				version: "1.0",
				width: number,
			},
			reddit_video?: {
				bitrate_kbps: number,
				dash_url: string,
				duration: number,
				fallback_url: string,
				has_audio: boolean,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			},
			type?: "youtube.com",
		},
		secure_media_embed: {
			content?: string,
			height?: number,
			media_domain_url?: string,
			scrolling?: boolean,
			width?: number,
		},
		selftext: string,
		selftext_html: null|string,
		send_replies: boolean,
		spoiler: boolean,
		sr_detail: {
			accept_followers: boolean,
			allowed_media_in_comments: ("giphy"|"expression"|"static"|"animated")[],
			banner_img: string,
			banner_size: null|number[],
			community_icon: string|null,
			created: number,
			created_utc: number,
			default_set: boolean,
			description: string,
			disable_contributor_requests: boolean,
			display_name: "dataannotation"|"Ulta"|"movies"|"Fallout"|"television"|"PowerTV"|"USMobile"|"nfl"|"finance"|"NootropicsDepot"|"SubaruForester",
			display_name_prefixed: "r/dataannotation"|"r/Ulta"|"r/movies"|"r/Fallout"|"r/television"|"r/PowerTV"|"r/USMobile"|"r/nfl"|"r/finance"|"r/NootropicsDepot"|"r/SubaruForester",
			free_form_reports: boolean,
			header_img: string|null,
			header_size: null|number[],
			icon_color: "",
			icon_img: string,
			icon_size: null|number[],
			key_color: ""|"#ff8717"|"#545452"|"#222222"|"#0079d3"|"#24a0ed",
			link_flair_enabled: boolean,
			link_flair_position: "left"|"right"|"",
			name: "t5_2fd34i"|"t5_30vvl"|"t5_2qh3s"|"t5_2qnzu"|"t5_2qh6e"|"t5_322kj"|"t5_3c9au"|"t5_2qmg3"|"t5_2qhfj"|"t5_39ru5"|"t5_2y78a",
			over_18: boolean,
			previous_names: [],
			primary_color: ""|"#ffb000"|"#0c0c0c"|"#ffffff"|"#0c173e"|"#1e3752"|"#f2dfce"|"#fef9ec"|"#00a6a5",
			public_description: string,
			quarantine: boolean,
			restrict_commenting: boolean,
			restrict_posting: boolean,
			show_media: boolean,
			submit_link_label: ""|"Submit link"|"new terminal link",
			submit_text_label: ""|"Submit text"|"new log entry"|"Submit content",
			subreddit_type: "public",
			subscribers: number,
			title: string,
			url: "/r/dataannotation/"|"/r/Ulta/"|"/r/movies/"|"/r/Fallout/"|"/r/television/"|"/r/PowerTV/"|"/r/USMobile/"|"/r/nfl/"|"/r/finance/"|"/r/NootropicsDepot/"|"/r/SubaruForester/",
			user_is_banned: boolean,
			user_is_contributor: boolean,
			user_is_moderator: boolean,
			user_is_muted: null,
			user_is_subscriber: boolean,
		},
		stickied: boolean,
		subreddit: "dataannotation"|"Ulta"|"movies"|"Fallout"|"television"|"PowerTV"|"USMobile"|"nfl"|"finance"|"NootropicsDepot"|"SubaruForester",
		subreddit_id: "t5_2fd34i"|"t5_30vvl"|"t5_2qh3s"|"t5_2qnzu"|"t5_2qh6e"|"t5_322kj"|"t5_3c9au"|"t5_2qmg3"|"t5_2qhfj"|"t5_39ru5"|"t5_2y78a",
		subreddit_name_prefixed: "r/dataannotation"|"r/Ulta"|"r/movies"|"r/Fallout"|"r/television"|"r/PowerTV"|"r/USMobile"|"r/nfl"|"r/finance"|"r/NootropicsDepot"|"r/SubaruForester",
		subreddit_subscribers: number,
		subreddit_type: "public",
		suggested_sort: null|"top",
		thumbnail: string,
		thumbnail_height: number|null,
		thumbnail_width: number|null,
		title: string,
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|null,
		wls: number|null,
	}[],
	ad_supplementary_text_md?: null|string,
	ad_user_targeting?: null,
	adserver_click_url?: null,
	adserver_imp_pixel?: null,
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null,
	approved?: boolean,
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string,
		e: "text"|"emoji",
		t?: string,
		u?: string,
	}[],
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext",
	author_fullname?: string,
	author_id?: string|null,
	author_is_blocked: boolean,
	author_patreon_flair?: boolean,
	author_premium?: boolean,
	awarders: [],
	ban_note?: "reinforce spam",
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Download"|"Install"|"View More"|"Apply Now"|"Play Now"|"Order Now"|"Watch Now"|"Contact Us"|"Pre-order Now"|"Get a Quote"|"Get Showtimes"|"See Menu",
	campaign_id?: null,
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"drawing_and_painting"|"entertainment"|"photography"|"animals"|"gaming"|"memes"|"music"|""|"videos"|"funny",
	clicked: boolean,
	collections?: {
		author_id: string,
		author_name: string,
		collection_id: string,
		created_at_utc: number,
		description: string,
		display_layout: null|"GALLERY"|"TIMELINE",
		last_update_utc: number,
		link_ids: string[],
		permalink: string,
		sr_detail?: {
			banner_img: string,
			banner_size: null|number[],
			community_icon: string,
			created: number,
			created_utc: number,
			display_name: string,
			display_name_prefixed: string,
			icon_img: string,
			icon_size: null|number[],
			key_color: ""|"#46d160"|"#7e53c1"|"#ea0027"|"#0dd3bb"|"#ffb000"|"#0079d3"|"#24a0ed"|"#545452"|"#222222"|"#ddbd37"|"#25b79f",
			mod_permissions: [],
			name: string,
			over_18: boolean,
			primary_color: string,
			sr: string,
			sr_display_name_prefixed: string,
			subreddit_type: "public"|"restricted",
			subscribers: number,
			title: string,
			url: string,
			user_can_crosspost: boolean|null,
			whitelist_status: null|"all_ads"|"some_ads",
		},
		subreddit_id: string,
		title: string,
	}[],
	content_categories: null|("drawing_and_painting"|"gaming"|"photography"|"diy_and_crafts"|"entertainment"|"music"|"comics"|"writing"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string,
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean,
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string,
			e: "text"|"emoji",
			t?: string,
			u?: string,
		}[],
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext",
		author_fullname?: string,
		author_is_blocked: boolean,
		author_patreon_flair?: boolean,
		author_premium?: boolean,
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "",
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"drawing_and_painting"|"photography"|"entertainment"|""|"animals"|"memes"|"gaming"|"food"|"videos",
		clicked: boolean,
		collections?: {
			author_id: string,
			author_name: string,
			collection_id: string,
			created_at_utc: number,
			description: string,
			display_layout: null|"GALLERY"|"TIMELINE",
			last_update_utc: number,
			link_ids: string[],
			permalink: string,
			sr_detail?: {
				banner_img: string,
				banner_size: null|number[],
				community_icon: string,
				created: number,
				created_utc: number,
				display_name: "TheOriginOfTheSongs"|"workcules"|"vktoons"|"lovehair"|"trueearthscience"|"lisa"|"POROSOSVODKA"|"The_Guardian_Temple"|"CGLightsC"|"ClassicAJPW"|"StarFlorks"|"BigBlckLips",
				display_name_prefixed: "r/TheOriginOfTheSongs"|"r/workcules"|"r/vktoons"|"r/lovehair"|"r/trueearthscience"|"r/lisa"|"r/POROSOSVODKA"|"r/The_Guardian_Temple"|"r/CGLightsC"|"r/ClassicAJPW"|"r/StarFlorks"|"r/BigBlckLips",
				icon_img: string,
				icon_size: null|number[],
				key_color: ""|"#24a0ed",
				mod_permissions: [],
				name: "t5_aukdxj"|"t5_7ovi2c"|"t5_65xl5n"|"t5_6g68ad"|"t5_9qx9h6"|"t5_2qpri"|"t5_arczhq"|"t5_xg9hh"|"t5_9broja"|"t5_ahxm0g"|"t5_azc5i4"|"t5_bfikgk",
				over_18: boolean,
				primary_color: ""|"#000000"|"#6b6031"|"#e1f0f7"|"#808080",
				sr: "TheOriginOfTheSongs"|"workcules"|"vktoons"|"lovehair"|"trueearthscience"|"lisa"|"POROSOSVODKA"|"The_Guardian_Temple"|"CGLightsC"|"ClassicAJPW"|"StarFlorks"|"BigBlckLips",
				sr_display_name_prefixed: "r/TheOriginOfTheSongs"|"r/workcules"|"r/vktoons"|"r/lovehair"|"r/trueearthscience"|"r/lisa"|"r/POROSOSVODKA"|"r/The_Guardian_Temple"|"r/CGLightsC"|"r/ClassicAJPW"|"r/StarFlorks"|"r/BigBlckLips",
				subreddit_type: "public"|"restricted",
				subscribers: number,
				title: string,
				url: "/r/TheOriginOfTheSongs/"|"/r/workcules/"|"/r/vktoons/"|"/r/lovehair/"|"/r/trueearthscience/"|"/r/lisa/"|"/r/POROSOSVODKA/"|"/r/The_Guardian_Temple/"|"/r/CGLightsC/"|"/r/ClassicAJPW/"|"/r/StarFlorks/"|"/r/BigBlckLips/",
				user_can_crosspost: boolean,
				whitelist_status: null|"all_ads"|"some_ads",
			},
			subreddit_id: string,
			title: string,
		}[],
		content_categories: null|("photography"|"drawing_and_painting"|"writing"|"comics"|"diy_and_crafts"|"gaming"|"entertainment"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number,
		event_is_live?: boolean,
		event_start?: number,
		gallery_data?: {
			items: {
				caption?: string,
				id: number,
				media_id: string,
				outbound_url?: string,
			}[],
		}|null,
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean,
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null|boolean,
		link_flair_background_color: string|null,
		link_flair_css_class: null|string,
		link_flair_richtext: {
			a?: string,
			e: "text"|"emoji",
			t?: string,
			u?: string,
		}[],
		link_flair_template_id?: string,
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs"|"1bsso361afr0r",
			oembed?: {
				author_name?: string,
				author_url?: string,
				cache_age?: number,
				description?: string,
				height?: number|null,
				html?: string,
				mean_alpha?: number,
				provider_name?: string,
				provider_url?: string,
				thumbnail_height?: number|null,
				thumbnail_url?: string,
				thumbnail_width?: number|null,
				title?: string,
				type?: "video"|"rich",
				url?: string,
				version?: "1.0",
				width?: number,
			},
			reddit_video?: {
				bitrate_kbps?: number,
				dash_url?: string,
				duration?: number,
				fallback_url?: string,
				has_audio?: boolean,
				height?: number|null,
				hls_url?: string,
				is_gif?: boolean,
				scrubber_media_url?: string,
				transcoding_message?: string,
				transcoding_status: "completed"|"error",
				width?: number|null,
			},
			type?: string,
		},
		media_embed: {
			content?: string|null,
			height?: number,
			scrolling?: boolean,
			width?: number,
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string,
				e?: "Image"|"AnimatedImage"|"RedditVideo",
				hlsUrl?: string,
				id?: string,
				isGif?: boolean,
				m?: "image/jpg"|"image/png"|"image/gif",
				o?: {
					u: string,
					x: number,
					y: number,
				}[],
				p?: {
					u: string,
					x: number,
					y: number,
				}[],
				s?: {
					gif?: string,
					mp4?: string,
					u?: string,
					x: number,
					y: number,
				},
				status: "valid"|"failed"|"unprocessed",
				x?: number,
				y?: number,
			},
		}|null,
		media_only: boolean,
		mod_note: null,
		mod_reason_by: null,
		mod_reason_title: null,
		mod_reports: [],
		name: string,
		no_follow: boolean,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: null|"all_ads"|"some_ads"|"house_only",
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				vote_count?: number,
			}[],
			prediction_status: null,
			resolved_option_id: null,
			total_stake_amount: null,
			total_vote_count: number,
			tournament_id: null,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null,
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"video"|"gallery",
		preview?: {
			enabled: boolean,
			images: {
				id: string,
				resolutions: {
					height: number,
					url: string,
					width: number,
				}[],
				source: {
					height: number,
					url: string,
					width: number,
				},
				variants: {
					gif?: {
						resolutions: {
							height: number,
							url: string,
							width: number,
						}[],
						source: {
							height: number,
							url: string,
							width: number,
						},
					},
					mp4?: {
						resolutions: {
							height: number,
							url: string,
							width: number,
						}[],
						source: {
							height: number,
							url: string,
							width: number,
						},
					},
					nsfw?: {
						resolutions: {
							height: number,
							url: string,
							width: number,
						}[],
						source: {
							height: number,
							url: string,
							width: number,
						},
					},
					obfuscated?: {
						resolutions: {
							height: number,
							url: string,
							width: number,
						}[],
						source: {
							height: number,
							url: string,
							width: number,
						},
					},
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number,
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			},
		},
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"copyright_takedown"|"content_takedown"|"author"|"automod_filtered",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs"|"1bsso361afr0r",
			oembed?: {
				author_name?: string,
				author_url?: string,
				cache_age?: number,
				description?: string,
				height?: number|null,
				html?: string,
				mean_alpha?: number,
				provider_name?: string,
				provider_url?: string,
				thumbnail_height?: number|null,
				thumbnail_url?: string,
				thumbnail_width?: number|null,
				title?: string,
				type?: "video"|"rich",
				url?: string,
				version?: "1.0",
				width?: number,
			},
			reddit_video?: {
				bitrate_kbps?: number,
				dash_url?: string,
				duration?: number,
				fallback_url?: string,
				has_audio?: boolean,
				height?: number|null,
				hls_url?: string,
				is_gif?: boolean,
				scrubber_media_url?: string,
				transcoding_message?: string,
				transcoding_status: "completed"|"error",
				width?: number|null,
			},
			type?: string,
		},
		secure_media_embed: {
			content?: string|null,
			height?: number,
			media_domain_url?: string,
			scrolling?: boolean,
			width?: number,
		},
		selftext: string,
		selftext_html: null|string,
		send_replies: boolean,
		spoiler: boolean,
		stickied: boolean,
		subreddit: string,
		subreddit_id: string,
		subreddit_name_prefixed: string,
		subreddit_subscribers: number,
		subreddit_type: "public"|"user"|"restricted"|"archived",
		suggested_sort: null|"qa"|"confidence"|"top"|"new"|"old"|"controversial"|"live"|"random",
		thumbnail: string,
		thumbnail_height: number|null,
		thumbnail_width: number|null,
		title: string,
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: null|"all_ads"|"some_ads"|"house_only",
		wls: null|number,
	}[],
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null,
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe",
	embed_url?: null|string,
	event_end?: number,
	event_is_live?: boolean,
	event_start?: number,
	events?: [],
	eventsOnRender?: [],
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"View More"|"Download"|"Watch Now"|"Order Now"|"Install"|"Pre-order Now"|"Apply Now"|"Contact Us"|"Play Now"|"Get a Quote"|"Get Showtimes"|"See Menu",
			caption?: string,
			display_url?: string,
			id: number,
			media_id: string,
			outbound_url?: string,
			product?: {
				description: string,
				price?: string,
				title: string,
			},
		}[],
	}|null,
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string,
	id: string,
	ignore_reports?: boolean,
	impression_id?: null,
	impression_id_str?: null,
	is_blank?: boolean,
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean,
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean,
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string,
		e: "text"|"emoji",
		t?: string,
		u?: string,
	}[],
	link_flair_template_id?: string,
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string,
		oembed?: {
			author_name?: string,
			author_url?: string,
			cache_age?: number,
			description?: string,
			height?: number|null,
			html?: string,
			marginheight?: number,
			marginwidth?: number,
			mean_alpha?: number,
			provider_name?: string,
			provider_url?: string,
			thumbnail_height?: number|null,
			thumbnail_url?: string,
			thumbnail_width?: number|null,
			title?: string,
			type?: "video"|"rich",
			url?: string,
			version?: "1.0",
			width?: number,
		},
		reddit_video?: {
			bitrate_kbps?: number,
			dash_url?: string,
			duration?: number,
			fallback_url?: string,
			has_audio?: boolean,
			height?: number|null,
			hls_url?: string,
			is_gif?: boolean,
			scrubber_media_url?: string,
			transcoding_message?: string,
			transcoding_status: "completed"|"error",
			width?: number|null,
		},
		type?: string,
	},
	media_embed: {
		content?: string|null,
		height?: number,
		scrolling?: boolean,
		width?: number,
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string,
			e?: "Image"|"AnimatedImage"|"RedditVideo",
			hlsUrl?: string,
			id?: string,
			isGif?: boolean,
			m?: "image/jpg"|"image/png"|"image/gif",
			o?: {
				u: string,
				x: number,
				y: number,
			}[],
			p?: {
				u: string,
				x: number,
				y: number,
			}[],
			s?: {
				gif?: string,
				mp4?: string,
				u?: string,
				x: number,
				y: number,
			},
			status: "valid"|"unprocessed"|"failed",
			x?: number,
			y?: number,
		},
	}|null,
	media_only: boolean,
	mobile_ad_url?: string,
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null,
	outbound_link?: {
	},
	over_18: boolean,
	parent_whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all",
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number,
		}[],
		prediction_status: null,
		resolved_option_id: null,
		total_stake_amount: null,
		total_vote_count: number,
		tournament_id: null,
		user_selection: null,
		user_won_amount: null,
		vote_updates_remained: null,
		voting_end_timestamp: number,
	}|null,
	post_hint?: "image"|"rich:video"|"link"|"self"|"hosted:video"|"gallery"|"video",
	preview?: {
		enabled: boolean,
		images: {
			id: string,
			resolutions: {
				height: number,
				url: string,
				width: number,
			}[],
			source: {
				height: number,
				url: string,
				width: number,
			},
			variants: {
				gif?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				},
				mp4?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				},
				nsfw?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				},
				obfuscated?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				},
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number,
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		},
	},
	priority_id?: null,
	product_ids?: [],
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO",
	promoted?: boolean,
	promoted_by?: null,
	promoted_display_name?: null,
	promoted_url?: null,
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed?: boolean,
	removed_by: null,
	removed_by_category: null|"moderator"|"reddit"|"automod_filtered"|"deleted"|"author"|"content_takedown"|"copyright_takedown"|"community_ops",
	report_reasons: null,
	retrieved_on: number,
	rte_mode?: "markdown",
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string,
		oembed?: {
			author_name?: string,
			author_url?: string,
			cache_age?: number,
			description?: string,
			height?: number|null,
			html?: string,
			marginheight?: number,
			marginwidth?: number,
			mean_alpha?: number,
			provider_name?: string,
			provider_url?: string,
			thumbnail_height?: number|null,
			thumbnail_url?: string,
			thumbnail_width?: number|null,
			title?: string,
			type?: "video"|"rich",
			url?: string,
			version?: "1.0",
			width?: number,
		},
		reddit_video?: {
			bitrate_kbps?: number,
			dash_url?: string,
			duration?: number,
			fallback_url?: string,
			has_audio?: boolean,
			height?: number|null,
			hls_url?: string,
			is_gif?: boolean,
			scrubber_media_url?: string,
			transcoding_message?: string,
			transcoding_status: "completed"|"error",
			width?: number|null,
		},
		type?: string,
	},
	secure_media_embed: {
		content?: string|null,
		height?: number,
		media_domain_url?: string,
		scrolling?: boolean,
		width?: number,
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean,
	sk_ad_network_data?: null,
	spam?: boolean,
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"private",
	suggested_sort: null|"new"|"confidence"|"qa"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [],
	third_party_tracking?: null,
	third_party_tracking_2?: null,
	thumbnail: string|null,
	thumbnail_height?: number|null,
	thumbnail_width?: number|null,
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason?: "BLOCK",
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string,
	user_reports: [],
	view_count: null,
	visited: boolean,
	whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all",
	wls: null|number,
}
