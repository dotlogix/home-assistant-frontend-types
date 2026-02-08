declare const _default: {
    panel: {
        energy: string;
        calendar: string;
        config: string;
        states: string;
        map: string;
        logbook: string;
        history: string;
        todo: string;
        developer_tools: string;
        media_browser: string;
        profile: string;
        light: string;
        security: string;
        climate: string;
    };
    state: {
        default: {
            unknown: string;
            unavailable: string;
        };
    };
    state_badge: {
        default: {
            unknown: string;
            unavailable: string;
            error: string;
            entity_not_found: string;
        };
        alarm_control_panel: {
            armed: string;
            disarmed: string;
            armed_home: string;
            armed_away: string;
            armed_night: string;
            armed_vacation: string;
            armed_custom_bypass: string;
            pending: string;
            arming: string;
            disarming: string;
            triggered: string;
        };
        device_tracker: {
            home: string;
            not_home: string;
        };
        person: {
            home: string;
            not_home: string;
        };
    };
    groups: {
        owner: string;
        "system-admin": string;
        "system-users": string;
        "system-read-only": string;
    };
    config_entry: {
        disabled_by: {
            user: string;
            integration: string;
            config_entry: string;
            device: string;
        };
        hidden_by: {
            user: string;
            integration: string;
            device: string;
        };
    };
    ui: {
        backup: {
            upload_backup: string;
        };
        badge: {
            entity: {
                not_found: string;
            };
        };
        card: {
            common: {
                turn_on: string;
                turn_off: string;
                toggle: string;
                entity_not_found: string;
            };
            alarm_control_panel: {
                code: string;
                clear_code: string;
                disarm: string;
                arm: string;
                arm_home: string;
                arm_away: string;
                arm_night: string;
                arm_vacation: string;
                arm_custom_bypass: string;
                modes_label: string;
                modes: {
                    armed_away: string;
                    armed_home: string;
                    armed_night: string;
                    armed_vacation: string;
                    armed_custom_bypass: string;
                    disarmed: string;
                };
            };
            area: {
                area_not_found: string;
            };
            automation: {
                last_triggered: string;
                trigger: string;
            };
            button: {
                press: string;
            };
            camera: {
                not_available: string;
            };
            climate: {
                currently: string;
                on_off: string;
                target_temperature_entity: string;
                target_temperature_mode: string;
                current_temperature: string;
                heating: string;
                cooling: string;
                high: string;
                low: string;
                mode: string;
                preset: string;
                target_label: string;
                target: string;
                humidity_target: string;
            };
            counter: {
                actions: {
                    increment: string;
                    decrement: string;
                    reset: string;
                };
            };
            cover: {
                position: string;
                tilt_position: string;
                open_cover: string;
                close_cover: string;
                open_tilt_cover: string;
                close_tilt_cover: string;
                stop_cover: string;
            };
            date: {
                set_date: string;
            };
            fan: {
                preset_mode: string;
                oscillate: string;
                direction: string;
                forward: string;
                reverse: string;
                speed: {
                    low: string;
                    medium: string;
                    high: string;
                };
            };
            humidifier: {
                currently: string;
                humidity: string;
                state: string;
                mode: string;
                target_humidity_entity: string;
                current_humidity_entity: string;
                humidifying: string;
                drying: string;
                on_entity: string;
                target_label: string;
                target: string;
            };
            lawn_mower: {
                actions: {
                    resume_mowing: string;
                    start_mowing: string;
                    pause: string;
                    dock: string;
                };
            };
            light: {
                brightness: string;
                color_temperature: string;
                white_value: string;
                color_brightness: string;
                cold_white_value: string;
                warm_white_value: string;
                effect: string;
            };
            lock: {
                code: string;
                lock: string;
                unlock: string;
                open: string;
                open_door: string;
                open_door_confirm: string;
                open_door_done: string;
            };
            "home-summary": {
                all_lights_off: string;
                count_lights_on: string;
                count_locks_unlocked: string;
                count_alarms_disarmed: string;
                all_secure: string;
                no_media_playing: string;
                count_media_playing: string;
            };
            media_player: {
                source: string;
                sound_mode: string;
                browse_media: string;
                turn_on: string;
                turn_off: string;
                media_play: string;
                media_play_pause: string;
                media_pause: string;
                media_stop: string;
                media_next_track: string;
                media_previous_track: string;
                media_volume_up: string;
                media_volume_down: string;
                media_volume_mute: string;
                media_volume_unmute: string;
                repeat_set: string;
                shuffle_set: string;
                text_to_speak: string;
                nothing_playing: string;
                join: string;
                media_players: string;
                select_all: string;
                idle: string;
                track_position: string;
            };
            persistent_notification: {
                dismiss: string;
            };
            scene: {
                activate: string;
            };
            script: {
                run: string;
                running_single: string;
                running_queued: string;
                running_parallel: string;
                cancel: string;
                cancel_multiple: string;
                cancel_all: string;
                idle: string;
                run_script: string;
            };
            service: {
                run: string;
            };
            select: {
                option: string;
            };
            update: {
                installing: string;
                installing_with_progress: string;
                up_to_date: string;
            };
            text: {
                emtpy_value: string;
            };
            timer: {
                actions: {
                    start: string;
                    pause: string;
                    cancel: string;
                    finish: string;
                };
            };
            vacuum: {
                actions: {
                    resume_cleaning: string;
                    return_to_base: string;
                    start_cleaning: string;
                    turn_on: string;
                    turn_off: string;
                };
            };
            valve: {
                open_valve: string;
                close_valve: string;
                stop_valve: string;
            };
            water_heater: {
                currently: string;
                on_off: string;
                target_temperature: string;
                away_mode: string;
                mode: string;
                target_label: string;
                target: string;
            };
            weather: {
                attributes: {
                    air_pressure: string;
                    humidity: string;
                    temperature: string;
                    visibility: string;
                    wind_speed: string;
                    precipitation: string;
                };
                cardinal_direction: {
                    e: string;
                    ene: string;
                    ese: string;
                    n: string;
                    ne: string;
                    nne: string;
                    nw: string;
                    nnw: string;
                    s: string;
                    se: string;
                    sse: string;
                    ssw: string;
                    sw: string;
                    w: string;
                    wnw: string;
                    wsw: string;
                };
                day: string;
                night: string;
                forecast: string;
                forecast_daily: string;
                forecast_hourly: string;
                forecast_twice_daily: string;
                daily: string;
                hourly: string;
                twice_daily: string;
                high: string;
                low: string;
            };
        };
        card_features: {
            area_controls: {
                light: {
                    on: string;
                    off: string;
                };
                fan: {
                    on: string;
                    off: string;
                };
                switch: {
                    on: string;
                    off: string;
                };
                "cover-awning": {
                    on: string;
                    off: string;
                };
                "cover-blind": {
                    on: string;
                    off: string;
                };
                "cover-curtain": {
                    on: string;
                    off: string;
                };
                "cover-damper": {
                    on: string;
                    off: string;
                };
                "cover-door": {
                    on: string;
                    off: string;
                };
                "cover-garage": {
                    on: string;
                    off: string;
                };
                "cover-gate": {
                    on: string;
                    off: string;
                };
                "cover-shade": {
                    on: string;
                    off: string;
                };
                "cover-shutter": {
                    on: string;
                    off: string;
                };
                "cover-window": {
                    on: string;
                    off: string;
                };
            };
        };
        common: {
            and: string;
            continue: string;
            previous: string;
            loading: string;
            refresh: string;
            cancel: string;
            delete: string;
            delete_all: string;
            download: string;
            duplicate: string;
            remove: string;
            enable: string;
            disable: string;
            update: string;
            hide: string;
            close: string;
            clear: string;
            leave: string;
            stay: string;
            next: string;
            back: string;
            undo: string;
            redo: string;
            move: string;
            save: string;
            apply: string;
            add: string;
            create: string;
            edit: string;
            edit_item: string;
            submit: string;
            rename: string;
            search: string;
            ok: string;
            yes: string;
            no: string;
            not_now: string;
            skip: string;
            menu: string;
            overflow_menu: string;
            help: string;
            successfully_saved: string;
            successfully_deleted: string;
            deleting_failed: string;
            error_required: string;
            copied: string;
            copied_clipboard: string;
            name: string;
            optional: string;
            default: string;
            dont_save: string;
            copy: string;
            show: string;
            replace: string;
            append: string;
            supports_markdown: string;
            markdown: string;
        };
        components: {
            selectors: {
                media: {
                    pick_media_player: string;
                    browse_not_supported: string;
                    pick_media: string;
                    browse_media: string;
                    manual: string;
                    media_content_id: string;
                    media_content_type: string;
                    media_content_id_detail: string;
                    media_content_type_detail: string;
                };
                file: {
                    upload_failed: string;
                    unknown_file: string;
                };
                image: {
                    image: string;
                    select_image_with_label: string;
                    upload: string;
                    url: string;
                };
                background: {
                    yaml_info: string;
                };
                location: {
                    latitude: string;
                    longitude: string;
                    radius: string;
                    radius_meters: string;
                };
                selector: {
                    options: string;
                    type: string;
                    multiple: string;
                    types: {
                        action: string;
                        area: string;
                        attribute: string;
                        boolean: string;
                        color_temp: string;
                        condition: string;
                        date: string;
                        datetime: string;
                        device: string;
                        duration: string;
                        entity: string;
                        floor: string;
                        icon: string;
                        location: string;
                        media: string;
                        number: string;
                        object: string;
                        color_rgb: string;
                        select: string;
                        state: string;
                        target: string;
                        template: string;
                        text: string;
                        theme: string;
                        time: string;
                        manual: string;
                    };
                };
                template: {
                    yaml_warning: string;
                    learn_more: string;
                };
                text: {
                    show_password: string;
                    hide_password: string;
                };
            };
            logbook: {
                entries_not_found: string;
                triggered_by: string;
                triggered_by_automation: string;
                triggered_by_script: string;
                triggered_by_action: string;
                triggered_by_numeric_state_of: string;
                triggered_by_state_of: string;
                triggered_by_event: string;
                triggered_by_time: string;
                triggered_by_time_pattern: string;
                triggered_by_homeassistant_stopping: string;
                triggered_by_homeassistant_starting: string;
                show_trace: string;
                retrieval_error: string;
                not_loaded: string;
                messages: {
                    was_away: string;
                    was_at_state: string;
                    rose: string;
                    set: string;
                    was_low: string;
                    was_normal: string;
                    was_connected: string;
                    was_disconnected: string;
                    was_opened: string;
                    was_closed: string;
                    is_opening: string;
                    is_opened: string;
                    is_closing: string;
                    was_unlocked: string;
                    was_locked: string;
                    is_unlocking: string;
                    is_locking: string;
                    is_jammed: string;
                    was_plugged_in: string;
                    was_unplugged: string;
                    was_at_home: string;
                    was_unsafe: string;
                    was_safe: string;
                    detected_device_class: string;
                    cleared_device_class: string;
                    turned_off: string;
                    turned_on: string;
                    changed_to_state: string;
                    became_unavailable: string;
                    became_unknown: string;
                    detected_tampering: string;
                    cleared_tampering: string;
                    detected_event: string;
                    detected_event_no_type: string;
                    detected_unknown_event: string;
                    detected_device_classes: {
                        battery: string;
                        battery_charging: string;
                        carbon_monoxide: string;
                        cold: string;
                        connectivity: string;
                        door: string;
                        garage_door: string;
                        gas: string;
                        heat: string;
                        light: string;
                        lock: string;
                        moisture: string;
                        motion: string;
                        moving: string;
                        occupancy: string;
                        opening: string;
                        plug: string;
                        power: string;
                        presence: string;
                        problem: string;
                        running: string;
                        safety: string;
                        smoke: string;
                        sound: string;
                        tamper: string;
                        update: string;
                        vibration: string;
                        window: string;
                    };
                    cleared_device_classes: {
                        battery: string;
                        battery_charging: string;
                        carbon_monoxide: string;
                        cold: string;
                        connectivity: string;
                        door: string;
                        garage_door: string;
                        gas: string;
                        heat: string;
                        light: string;
                        lock: string;
                        moisture: string;
                        motion: string;
                        moving: string;
                        occupancy: string;
                        opening: string;
                        plug: string;
                        power: string;
                        presence: string;
                        problem: string;
                        running: string;
                        safety: string;
                        smoke: string;
                        sound: string;
                        tamper: string;
                        update: string;
                        vibration: string;
                        window: string;
                    };
                };
            };
            entity: {
                "entity-picker": {
                    choose_entity: string;
                    entity: string;
                    add: string;
                    edit: string;
                    clear: string;
                    no_entities: string;
                    no_match: string;
                    show_entities: string;
                    new_entity: string;
                    placeholder: string;
                    create_helper: string;
                };
                "entity-name-picker": {
                    types: {
                        floor: string;
                        area: string;
                        device: string;
                        entity: string;
                        area_missing: string;
                        floor_missing: string;
                        device_missing: string;
                    };
                    add: string;
                    custom_name: string;
                };
                "entity-attribute-picker": {
                    attribute: string;
                    show_attributes: string;
                };
                "entity-state-picker": {
                    state: string;
                };
                "entity-state-content-picker": {
                    add: string;
                };
            };
            "target-picker": {
                expand: string;
                expand_floor_id: string;
                expand_area_id: string;
                expand_device_id: string;
                expand_label_id: string;
                add_target: string;
                remove: string;
                remove_floor_id: string;
                remove_area_id: string;
                remove_device_id: string;
                remove_entity_id: string;
                remove_label_id: string;
                floor_not_found: string;
                area_not_found: string;
                device_not_found: string;
                entity_not_found: string;
                label_not_found: string;
                devices_count: string;
                entities_count: string;
                target_details: string;
                no_targets: string;
                no_target_found: string;
                selected: {
                    entity: string;
                    device: string;
                    area: string;
                    label: string;
                    floor: string;
                };
                type: {
                    area: string;
                    areas: string;
                    device: string;
                    devices: string;
                    entity: string;
                    entities: string;
                    label: string;
                    labels: string;
                    floor: string;
                };
            };
            "subpage-data-table": {
                filters: string;
                show_results: string;
                clear_filter: string;
                close_filter: string;
                exit_selection_mode: string;
                enter_selection_mode: string;
                sort_by: string;
                group_by: string;
                dont_group_by: string;
                collapse_all_groups: string;
                expand_all_groups: string;
                select: string;
                selected: string;
                select_all: string;
                select_none: string;
                settings: string;
            };
            "config-entry-picker": {
                config_entry: string;
            };
            "coversation-agent-picker": {
                conversation_agent: string;
                none: string;
            };
            "country-picker": {
                country: string;
            };
            "pipeline-picker": {
                pipeline: string;
                preferred: string;
                last_used: string;
            };
            "theme-picker": {
                theme: string;
                no_theme: string;
            };
            "language-picker": {
                language: string;
                no_match: string;
                no_languages: string;
            };
            "tts-picker": {
                tts: string;
                none: string;
            };
            "tts-voice-picker": {
                voice: string;
                none: string;
            };
            "user-picker": {
                no_match: string;
                user: string;
                add_user: string;
            };
            "blueprint-picker": {
                select_blueprint: string;
            };
            "device-picker": {
                clear: string;
                toggle: string;
                show_devices: string;
                no_devices: string;
                no_match: string;
                device: string;
                unnamed_device: string;
                no_area: string;
                placeholder: string;
            };
            "category-picker": {
                clear: string;
                show_categories: string;
                categories: string;
                category: string;
                add_category: string;
                add_new_sugestion: string;
                add_new: string;
                no_categories: string;
                no_match: string;
                add_dialog: {
                    title: string;
                    text: string;
                    name: string;
                    add: string;
                    failed_create_category: string;
                };
            };
            "label-picker": {
                label: string;
                labels: string;
                add_new_sugestion: string;
                add_new: string;
                add: string;
                no_labels: string;
                no_match: string;
                failed_create_label: string;
            };
            "area-picker": {
                clear: string;
                show_areas: string;
                area: string;
                add_new_sugestion: string;
                add_new: string;
                no_areas: string;
                no_match: string;
                unassigned_areas: string;
                failed_create_area: string;
            };
            "floor-picker": {
                clear: string;
                show_floors: string;
                floor: string;
                add_new_sugestion: string;
                add_new: string;
                no_floors: string;
                no_match: string;
                failed_create_floor: string;
            };
            "area-filter": {
                title: string;
                no_areas: string;
                area_count: string;
                all_areas: string;
                show: string;
                hide: string;
            };
            "statistic-picker": {
                statistic: string;
                placeholder: string;
                no_statistics: string;
                no_match: string;
                no_state: string;
                missing_entity: string;
                learn_more: string;
            };
            "addon-picker": {
                addon: string;
                error: {
                    no_supervisor: string;
                    fetch_addons: string;
                };
            };
            "mount-picker": {
                mount: string;
                use_datadisk: string;
                error: {
                    no_supervisor: string;
                    fetch_mounts: string;
                };
            };
            "stt-picker": {
                stt: string;
                none: string;
            };
            "related-filter-menu": {
                filter: string;
                filter_by_entity: string;
                filter_by_device: string;
                filter_by_area: string;
                filtered_by_entity: string;
                filtered_by_device: string;
                filtered_by_area: string;
            };
            "file-upload": {
                uploading: string;
                uploading_name: string;
                label: string;
                secondary: string;
                unsupported_format: string;
            };
            "picture-upload": {
                label: string;
                clear_picture: string;
                current_image_alt: string;
                supported_formats: string;
                unsupported_format: string;
                secondary: string;
                select_media: string;
            };
            "color-picker": {
                default: string;
                state: string;
                none: string;
                colors: {
                    primary: string;
                    accent: string;
                    disabled: string;
                    inactive: string;
                    red: string;
                    pink: string;
                    purple: string;
                    "deep-purple": string;
                    indigo: string;
                    blue: string;
                    "light-blue": string;
                    cyan: string;
                    teal: string;
                    green: string;
                    "light-green": string;
                    lime: string;
                    yellow: string;
                    amber: string;
                    orange: string;
                    "deep-orange": string;
                    brown: string;
                    "light-grey": string;
                    grey: string;
                    "dark-grey": string;
                    "blue-grey": string;
                    black: string;
                    white: string;
                };
            };
            "date-range-picker": {
                start_date: string;
                end_date: string;
                select: string;
                select_date_range: string;
                ranges: {
                    today: string;
                    yesterday: string;
                    "now-1h": string;
                    "now-12h": string;
                    "now-24h": string;
                    this_week: string;
                    this_quarter: string;
                    this_month: string;
                    "now-7d": string;
                    "now-30d": string;
                    this_year: string;
                    "now-12m": string;
                };
            };
            "grid-size-picker": {
                reset_default: string;
                columns: string;
                rows: string;
            };
            relative_time: {
                never: string;
            };
            absolute_time: {
                never: string;
            };
            history_charts: {
                history_disabled: string;
                loading_history: string;
                no_history_found: string;
                error: string;
                duration: string;
                source_history: string;
                source_stats: string;
                zoom_reset: string;
                expand_legend: string;
                collapse_legend: string;
            };
            map: {
                error: string;
            };
            statistics_charts: {
                loading_statistics: string;
                no_statistics_found: string;
                statistic_types: {
                    min: string;
                    max: string;
                    mean: string;
                    state: string;
                    sum: string;
                    change: string;
                };
            };
            "service-picker": {
                action: string;
                no_match: string;
            };
            "service-control": {
                required: string;
                target: string;
                target_secondary: string;
                action_data: string;
                integration_doc: string;
                script_variables: string;
            };
            "related-items": {
                no_related_found: string;
                integration: string;
                device: string;
                area: string;
                entity: string;
                group: string;
                scene: string;
                script: string;
                automation: string;
                blueprint: string;
            };
            "data-table": {
                search: string;
                "no-data": string;
                filtering_by: string;
                hidden: string;
                clear: string;
                ungrouped: string;
                collapse: string;
                expand: string;
                settings: {
                    header: string;
                    hide: string;
                    show: string;
                    done: string;
                    restore: string;
                };
            };
            siren: {
                advanced_controls: string;
                tone: string;
                duration: string;
                volume: string;
            };
            "media-browser": {
                tts: {
                    message: string;
                    example_message: string;
                    language: string;
                    gender: string;
                    gender_male: string;
                    gender_female: string;
                    action_play: string;
                    action_pick: string;
                    set_as_default: string;
                    faild_to_store_defaults: string;
                    selected_voice_id: string;
                    copy_voice_id: string;
                };
                pick: string;
                play: string;
                "play-media": string;
                "pick-media": string;
                no_items: string;
                not_shown: string;
                choose_player: string;
                "media-player-browser": string;
                "web-browser": string;
                media_player: string;
                audio_not_supported: string;
                video_not_supported: string;
                media_not_supported: string;
                media_browsing_error: string;
                learn_adding_local_media: string;
                local_media_files: string;
                documentation: string;
                no_local_media_found: string;
                no_media_folder: string;
                setup_local_help: string;
                file_management: {
                    title: string;
                    manage: string;
                    no_items: string;
                    folders_not_supported: string;
                    highlight_button: string;
                    upload_failed: string;
                    add_media: string;
                    uploading: string;
                    confirm_delete: string;
                    delete: string;
                    deleting: string;
                    deselect_all: string;
                    tip_media_storage: string;
                    tip_storage_panel: string;
                };
                class: {
                    album: string;
                    app: string;
                    artist: string;
                    channel: string;
                    composer: string;
                    contributing_artist: string;
                    directory: string;
                    episode: string;
                    game: string;
                    genre: string;
                    image: string;
                    movie: string;
                    music: string;
                    playlist: string;
                    podcast: string;
                    season: string;
                    track: string;
                    tv_show: string;
                    url: string;
                    video: string;
                };
                media_player_unavailable: string;
                auto: string;
                grid: string;
                list: string;
            };
            todo: {
                item: {
                    summary: string;
                    description: string;
                    add: string;
                    delete: string;
                    edit: string;
                    save: string;
                    due: string;
                    not_all_required_fields: string;
                    confirm_delete: {
                        delete: string;
                        prompt: string;
                    };
                };
            };
            calendar: {
                label: string;
                my_calendars: string;
                create_calendar: string;
                today: string;
                event_retrieval_error: string;
                event: {
                    add: string;
                    delete: string;
                    edit: string;
                    save: string;
                    all_day: string;
                    start: string;
                    end: string;
                    invalid_duration: string;
                    not_all_required_fields: string;
                    end_auto_adjusted: string;
                    confirm_delete: {
                        delete: string;
                        delete_this: string;
                        delete_future: string;
                        prompt: string;
                        recurring_prompt: string;
                    };
                    confirm_update: {
                        update: string;
                        update_this: string;
                        update_future: string;
                        recurring_prompt: string;
                    };
                    repeat: {
                        label: string;
                        freq: {
                            none: string;
                            label: string;
                            yearly: string;
                            monthly: string;
                            weekly: string;
                            daily: string;
                        };
                        interval: {
                            label: string;
                            monthly: string;
                            weekly: string;
                            daily: string;
                        };
                        monthly: {
                            label: string;
                        };
                        weekly: {
                            weekday: {
                                su: string;
                                mo: string;
                                tu: string;
                                we: string;
                                th: string;
                                fr: string;
                                sa: string;
                            };
                        };
                        end: {
                            label: string;
                            never: string;
                            after: string;
                            on: string;
                        };
                        end_on: {
                            label: string;
                        };
                        end_after: {
                            label: string;
                            ocurrences: string;
                        };
                    };
                    rrule: {
                        every: string;
                        years: string;
                        year: string;
                        months: string;
                        month: string;
                        weeks: string;
                        week: string;
                        weekdays: string;
                        weekday: string;
                        days: string;
                        day: string;
                        until: string;
                        for: string;
                        in: string;
                        on: string;
                        "on the": string;
                        and: string;
                        or: string;
                        at: string;
                        last: string;
                        time: string;
                        times: string;
                    };
                    summary: string;
                    description: string;
                };
                views: {
                    dayGridMonth: string;
                    dayGridWeek: string;
                    dayGridDay: string;
                    listWeek: string;
                };
            };
            attributes: {
                expansion_header: string;
            };
            "qr-scanner": {
                select_camera: string;
                only_https_supported: string;
                not_supported: string;
                manual_input: string;
                enter_qr_code: string;
                retry: string;
                wrong_code: string;
                no_camera_found: string;
                app: {
                    title: string;
                    description: string;
                    alternativeOptionLabel: string;
                };
            };
            "climate-control": {
                temperature_up: string;
                temperature_down: string;
            };
            "yaml-editor": {
                copy_to_clipboard: string;
                error: string;
                error_location: string;
                enter_fullscreen: string;
                exit_fullscreen: string;
            };
            "state-content-picker": {
                state: string;
                name: string;
                last_changed: string;
                last_updated: string;
                remaining_time: string;
                install_status: string;
            };
            "multi-textfield": {
                add_item: string;
            };
            "items-display-editor": {
                show: string;
                hide: string;
            };
            "form-optional-actions": {
                add: string;
            };
            "combo-box": {
                no_match: string;
            };
            suggest_with_ai: {
                label: string;
                suggesting_1: string;
                suggesting_2: string;
                suggesting_3: string;
                done: string;
                error: string;
            };
        };
        dialogs: {
            safe_mode: {
                title: string;
                text: string;
            };
            "quick-bar": {
                commands: {
                    reload: {
                        all: string;
                        reload: string;
                        core: string;
                        group: string;
                        automation: string;
                        script: string;
                        scene: string;
                        person: string;
                        zone: string;
                        input_boolean: string;
                        input_button: string;
                        input_text: string;
                        input_number: string;
                        input_datetime: string;
                        input_select: string;
                        template: string;
                        universal: string;
                        rest: string;
                        command_line: string;
                        filter: string;
                        statistics: string;
                        generic: string;
                        generic_thermostat: string;
                        homekit: string;
                        min_max: string;
                        history_stats: string;
                        trend: string;
                        ping: string;
                        filesize: string;
                        telegram: string;
                        smtp: string;
                        mqtt: string;
                        rpi_gpio: string;
                        themes: string;
                    };
                    server_control: {
                        perform_action: string;
                        restart: string;
                        stop: string;
                    };
                    types: {
                        reload: string;
                        navigation: string;
                        server_control: string;
                    };
                    navigation: {
                        logs: string;
                        automation: string;
                        script: string;
                        integrations: string;
                        areas: string;
                        scene: string;
                        helpers: string;
                        tags: string;
                        person: string;
                        devices: string;
                        entities: string;
                        energy: string;
                        lovelace: string;
                        zone: string;
                        users: string;
                        info: string;
                        network: string;
                        updates: string;
                        hardware: string;
                        storage: string;
                        general: string;
                        backups: string;
                        backup: string;
                        analytics: string;
                        system_health: string;
                        blueprint: string;
                        server_control: string;
                        system: string;
                        addon_dashboard: string;
                        addon_store: string;
                        addon_info: string;
                        shortcuts: string;
                    };
                };
                filter_placeholder: string;
                filter_placeholder_devices: string;
                title: string;
                key_c_tip: string;
                nothing_found: string;
            };
            voice_command: {
                title: string;
                did_not_hear: string;
                did_not_understand: string;
                found: string;
                error: string;
                conversation_no_control: string;
                how_can_i_help: string;
                input_label: string;
                send_text: string;
                start_listening: string;
                manage_assistants: string;
                not_supported_microphone_browser: string;
                not_supported_microphone_documentation: string;
                not_supported_microphone_documentation_link: string;
                unknown_error_load_assist: string;
                not_found_error_load_assist: string;
            };
            generic: {
                default_confirmation_title: string;
            };
            image_cropper: {
                crop: string;
                crop_image: string;
                use_original: string;
            };
            "date-picker": {
                today: string;
                clear: string;
            };
            more_info_control: {
                settings: string;
                edit: string;
                details: string;
                back_to_info: string;
                info: string;
                related: string;
                history: string;
                aggregate: string;
                logbook: string;
                device_or_service_info: string;
                device_type: {
                    device: string;
                    service: string;
                };
                last_changed: string;
                last_updated: string;
                show_more: string;
                exit_edit_mode: string;
                script: {
                    last_action: string;
                    last_triggered: string;
                };
                sun: {
                    azimuth: string;
                    elevation: string;
                    rising: string;
                    setting: string;
                };
                update: {
                    release_announcement: string;
                    skip: string;
                    clear_skipped: string;
                    install: string;
                    update: string;
                    auto_update_enabled_title: string;
                    auto_update_enabled_text: string;
                    create_backup: {
                        automatic: string;
                        automatic_description_last: string;
                        automatic_description_none: string;
                        manual: string;
                        manual_description: string;
                        addon: string;
                        addon_description: string;
                        generic: string;
                    };
                };
                updater: {
                    title: string;
                };
                remote: {
                    activity: string;
                };
                restored: {
                    no_longer_provided: string;
                };
                vacuum: {
                    status: string;
                    commands: string;
                    fan_speed: string;
                    start: string;
                    pause: string;
                    stop: string;
                    clean_spot: string;
                    locate: string;
                    return_home: string;
                    start_pause: string;
                };
                person: {
                    create_zone: string;
                };
                cover: {
                    switch_mode: {
                        button: string;
                        position: string;
                    };
                };
                zone: {
                    graph_unit: string;
                };
                light: {
                    edit_mode: string;
                    toggle: string;
                    color: string;
                    color_temp: string;
                    set_white: string;
                    select_effect: string;
                    color_picker: {
                        title: string;
                        mode: {
                            color: string;
                            color_temp: string;
                        };
                    };
                    favorite_color: {
                        set: string;
                        edit: string;
                        delete: string;
                        delete_confirm_title: string;
                        delete_confirm_text: string;
                        delete_confirm_action: string;
                        add: string;
                        edit_title: string;
                        add_title: string;
                    };
                };
                fan: {
                    set_forward_direction: string;
                    set_reverse_direction: string;
                    turn_on_oscillating: string;
                    turn_off_oscillating: string;
                };
                climate: {
                    temperature: string;
                    humidity: string;
                };
                lawn_mower: {
                    activity: string;
                    commands: string;
                    start_mowing: string;
                    pause: string;
                    dock: string;
                };
                valve: {
                    switch_mode: {
                        button: string;
                        position: string;
                    };
                };
                camera: {
                    download_snapshot: string;
                    failed_to_download: string;
                };
            };
            entity_registry: {
                settings: string;
                control: string;
                related: string;
                no_unique_id: string;
                faq: string;
                editor: {
                    name: string;
                    icon: string;
                    icon_error: string;
                    default_code: string;
                    default_code_error: string;
                    entity_id: string;
                    unit_of_measurement: string;
                    precipitation_unit: string;
                    precision: string;
                    precision_default: string;
                    pressure_unit: string;
                    temperature_unit: string;
                    visibility_unit: string;
                    wind_speed_unit: string;
                    device_class: string;
                    switch_as_x: string;
                    invert: {
                        label: string;
                        descriptions: {
                            cover: string;
                            lock: string;
                            valve: string;
                        };
                    };
                    device_classes: {
                        binary_sensor: {
                            door: string;
                            garage_door: string;
                            window: string;
                            opening: string;
                            battery: string;
                            battery_charging: string;
                            carbon_monoxide: string;
                            cold: string;
                            connectivity: string;
                            gas: string;
                            heat: string;
                            light: string;
                            lock: string;
                            moisture: string;
                            motion: string;
                            moving: string;
                            occupancy: string;
                            plug: string;
                            power: string;
                            presence: string;
                            problem: string;
                            running: string;
                            safety: string;
                            smoke: string;
                            sound: string;
                            tamper: string;
                            update: string;
                            vibration: string;
                        };
                        cover: {
                            door: string;
                            garage: string;
                            gate: string;
                            window: string;
                            shade: string;
                            awning: string;
                            blind: string;
                            curtain: string;
                            damper: string;
                            shutter: string;
                        };
                        switch: {
                            outlet: string;
                        };
                    };
                    unavailable: string;
                    entity_status: string;
                    change_area: string;
                    enabled_label: string;
                    disabled_label: string;
                    enabled_cause: string;
                    visible_label: string;
                    hidden_cause: string;
                    device_disabled: string;
                    entity_disabled: string;
                    enable_entity: string;
                    open_device_settings: string;
                    switch_as_x_confirm: string;
                    switch_as_x_remove_confirm: string;
                    switch_as_x_change_confirm: string;
                    enabled_description: string;
                    enabled_delay_confirm: string;
                    enabled_restart_confirm: string;
                    hidden_explanation: string;
                    delete: string;
                    confirm_delete: string;
                    update: string;
                    note: string;
                    use_device_area: string;
                    change_device_settings: string;
                    change_device_area_link: string;
                    configure_state: string;
                    configure_state_secondary: string;
                    stream: {
                        preload_stream: string;
                        preload_stream_description: string;
                        stream_orientation: string;
                        stream_orientation_description: string;
                        stream_orientation_1: string;
                        stream_orientation_2: string;
                        stream_orientation_3: string;
                        stream_orientation_4: string;
                        stream_orientation_5: string;
                        stream_orientation_6: string;
                        stream_orientation_7: string;
                        stream_orientation_8: string;
                    };
                    voice_assistants: string;
                    no_aliases: string;
                };
            };
            recreate_entity_ids: {
                confirm_rename_title: string;
                confirm_rename_warning: string;
                will_rename: string;
                new: string;
                old: string;
                cant_rename: string;
                wont_change: string;
                update_entity_error: string;
                confirm_no_renamable_entity_ids: string;
            };
            "device-registry-detail": {
                name: string;
                enabled_label: string;
                enabled_cause: string;
                type: {
                    device_heading: string;
                    device: string;
                    service_heading: string;
                    service: string;
                };
                enabled_description: string;
                update: string;
                unknown_error: string;
            };
            "label-detail": {
                new_label: string;
                name: string;
                icon: string;
                color: string;
                description: string;
                required_error_msg: string;
            };
            "voice-settings": {
                expose_header: string;
                aliases_header: string;
                aliases_description: string;
                aliases_no_unique_id: string;
                ask_pin: string;
                manual_config: string;
                unsupported: string;
                view_entity: string;
            };
            restart: {
                heading: string;
                advanced_options: string;
                backup_in_progress: string;
                upload_in_progress: string;
                restore_in_progress: string;
                wait_for_backup: string;
                error_backup_state: string;
                wait_for_upload: string;
                wait_for_restore: string;
                reload: {
                    title: string;
                    description: string;
                    reloading: string;
                    failed: string;
                };
                restart: {
                    title: string;
                    description: string;
                    confirm_title: string;
                    confirm_description: string;
                    confirm_action: string;
                    confirm_action_backup: string;
                    failed: string;
                };
                stop: {
                    confirm_title: string;
                    confirm_description: string;
                    confirm_action: string;
                };
                reboot: {
                    title: string;
                    description: string;
                    confirm_title: string;
                    confirm_description: string;
                    confirm_action: string;
                    action_toast: string;
                    confirm_action_backup: string;
                    failed: string;
                };
                shutdown: {
                    title: string;
                    description: string;
                    confirm_title: string;
                    confirm_description: string;
                    confirm_action: string;
                    confirm_action_backup: string;
                    action_toast: string;
                    failed: string;
                };
                "restart-safe-mode": {
                    title: string;
                    description: string;
                    confirm_title: string;
                    confirm_description: string;
                    confirm_action: string;
                    confirm_action_backup: string;
                    failed: string;
                };
            };
            aliases: {
                heading: string;
                label: string;
                remove: string;
                save: string;
                add: string;
                no_aliases: string;
                update: string;
                unknown_error: string;
            };
            helper_settings: {
                platform_not_loaded: string;
                yaml_not_editable: string;
                required_error_msg: string;
                generic: {
                    name: string;
                    icon: string;
                    advanced_settings: string;
                };
                input_datetime: {
                    date: string;
                    time: string;
                    datetime: string;
                    mode: string;
                };
                input_text: {
                    min: string;
                    max: string;
                    mode: string;
                    text: string;
                    password: string;
                    pattern_label: string;
                    pattern_helper: string;
                };
                input_number: {
                    min: string;
                    max: string;
                    mode: string;
                    box: string;
                    slider: string;
                    step: string;
                    unit_of_measurement: string;
                };
                input_select: {
                    options: string;
                    add_option: string;
                    remove_option: string;
                    no_options: string;
                    add: string;
                    confirm_delete: {
                        delete: string;
                        prompt: string;
                    };
                };
                counter: {
                    minimum: string;
                    maximum: string;
                    initial: string;
                    restore: string;
                    step: string;
                };
                timer: {
                    duration: string;
                    restore: string;
                };
                schedule: {
                    delete: string;
                    confirm_delete: string;
                    edit_schedule_block: string;
                    start: string;
                    end: string;
                    data: string;
                };
                template: {
                    time: string;
                    all_listeners: string;
                    no_listeners: string;
                    listeners: string;
                    entity: string;
                    domain: string;
                };
            };
            options_flow: {
                form: {
                    header: string;
                };
                loading: {
                    loading_flow: string;
                    loading_step: string;
                };
                success: {
                    description: string;
                };
            };
            repair_flow: {
                form: {
                    header: string;
                };
                loading: {
                    loading_flow: string;
                    loading_step: string;
                };
                success: {
                    description: string;
                };
            };
            config_entry_system_options: {
                title: string;
                enable_new_entities_label: string;
                enable_new_entities_description: string;
                enable_polling_label: string;
                enable_polling_description: string;
                restart_home_assistant: string;
                update: string;
            };
            zha_reconfigure_device: {
                heading: string;
                configuring_alt: string;
                introduction: string;
                battery_device_warning: string;
                run_in_background: string;
                start_reconfiguration: string;
                in_progress: string;
                configuration_failed: string;
                configuration_complete: string;
                button_show: string;
                button_hide: string;
                cluster_header: string;
                bind_header: string;
                reporting_header: string;
                attribute: string;
                min_max_change: string;
            };
            zha_manage_device: {
                heading: string;
                tabs: {
                    clusters: string;
                    bindings: string;
                    signature: string;
                    neighbors: string;
                };
            };
            zha_device_info: {
                manuf: string;
                no_area: string;
                device_signature: string;
                device_children: string;
                buttons: {
                    add: string;
                    remove: string;
                    manage: string;
                    reconfigure: string;
                    view_network: string;
                };
                services: {
                    reconfigure: string;
                    updateDeviceName: string;
                    remove: string;
                    zigbee_information: string;
                };
                confirmations: {
                    remove_title: string;
                    remove_text: string;
                };
                quirk: string;
                last_seen: string;
                power_source: string;
                unknown: string;
                zha_device_card: {
                    device_name_placeholder: string;
                };
            };
            mqtt_device_debug_info: {
                title: string;
                deserialize: string;
                entities: string;
                no_entity_debug_info: string;
                no_trigger_debug_info: string;
                payload_display: string;
                recent_messages: string;
                recent_tx_messages: string;
                show_as_yaml: string;
                triggers: string;
            };
            unsupported: {
                title: string;
                description: string;
                reasons: {
                    apparmor: string;
                    content_trust: string;
                    dbus: string;
                    docker_configuration: string;
                    docker_version: string;
                    job_conditions: string;
                    lxc: string;
                    network_manager: string;
                    os: string;
                    os_agent: string;
                    privileged: string;
                    software: string;
                    source_mods: string;
                    systemd: string;
                    systemd_resolved: string;
                };
            };
            unhealthy: {
                title: string;
                description: string;
                reasons: {
                    docker: string;
                    oserror_bad_message: string;
                    duplicate_os_installation: string;
                    privileged: string;
                    supervisor: string;
                    setup: string;
                    untrusted: string;
                };
            };
            join_beta_channel: {
                title: string;
                backup: string;
                warning: string;
                release_items: string;
                view_documentation: string;
                join: string;
            };
            enter_code: {
                title: string;
                input_label: string;
            };
            "tts-try": {
                header: string;
                message: string;
                message_example: string;
                message_placeholder: string;
                play: string;
            };
            update_backup: {
                title: string;
                text: string;
                create: string;
            };
            "matter-add-device": {
                add_device: string;
                add_device_failed: string;
                commissioning: {
                    header: string;
                    note: string;
                };
                main: {
                    header: string;
                    question: string;
                    answer_new: string;
                    answer_new_description: string;
                    answer_existing: string;
                    answer_existing_description: string;
                };
                new: {
                    header: string;
                    note: string;
                    download_app: string;
                    playstore: string;
                    appstore: string;
                };
                existing: {
                    header: string;
                    question: string;
                    answer_google_home: string;
                    answer_apple_home: string;
                    answer_generic: string;
                };
                google_home: {
                    header: string;
                    step_1: string;
                    step_2: string;
                    step_3: string;
                    linked_matter_apps_services: string;
                    link_apps_services: string;
                    no_home_assistant: string;
                    redirect: string;
                };
                google_home_fallback: {
                    header: string;
                    step_1: string;
                    step_2: string;
                    step_3: string;
                    linked_matter_apps_services: string;
                    link_apps_services: string;
                    use_pairing_code: string;
                    pairing_code: string;
                    code_instructions: string;
                };
                apple_home: {
                    header: string;
                    step_1: string;
                    step_2: string;
                    step_3: string;
                    accessory_settings: string;
                    turn_on_pairing_mode: string;
                    setup_code: string;
                    code_instructions: string;
                };
                generic: {
                    header: string;
                    code_instructions: string;
                    setup_code: string;
                };
            };
            shortcuts: {
                title: string;
                enable_shortcuts_hint: string;
                enable_shortcuts_hint_user_profile: string;
                keys: {
                    del: string;
                };
                shortcuts: {
                    double_click: string;
                    scroll_wheel: string;
                    drag: string;
                };
                searching: {
                    title: string;
                    on_any_page: string;
                    on_pages_with_tables: string;
                    search_command: string;
                    search_entities: string;
                    search_devices: string;
                    search_in_table: string;
                };
                assist: {
                    title: string;
                    open_assist: string;
                };
                automation_script: {
                    title: string;
                    copy: string;
                    cut: string;
                    delete: string;
                    paste: string;
                    save: string;
                    undo: string;
                    redo: string;
                };
                charts: {
                    title: string;
                    drag_to_zoom: string;
                    scroll_to_zoom: string;
                    double_click: string;
                };
                other: {
                    title: string;
                    my_link: string;
                };
            };
        };
        weekdays: {
            monday: string;
            tuesday: string;
            wednesday: string;
            thursday: string;
            friday: string;
            saturday: string;
            sunday: string;
        };
        errors: {
            config: {
                visual_editor_not_supported: string;
                visual_editor_not_supported_reason_type: string;
                edit_in_yaml_supported: string;
                configuration_error: string;
                configuration_warning: string;
                configuration_error_reason: string;
                no_type_provided: string;
                editor_not_supported: string;
                key_missing: string;
                key_not_expected: string;
                key_wrong_type: string;
                no_template_editor_support: string;
                media_query_not_supported: string;
            };
            supervisor: {
                title: string;
                wait: string;
                ask: string;
                reboot: string;
                observer: string;
                system_health: string;
            };
        };
        "login-form": {
            password: string;
            remember: string;
            log_in: string;
        };
        notification_drawer: {
            click_to_configure: string;
            empty: string;
            title: string;
            close: string;
            dismiss_all: string;
        };
        notification_toast: {
            action_failed: string;
            connection_lost: string;
            started: string;
            starting: string;
            wrapping_up_startup: string;
            integration_starting: string;
            triggered: string;
            dismiss: string;
            no_matching_link_found: string;
            new_version_available: string;
            reload: string;
        };
        sidebar: {
            external_app_configuration: string;
            sidebar_toggle: string;
            edit_sidebar: string;
            edit_subtitle: string;
            migrate_to_user_data: string;
        };
        panel: {
            my: {
                not_supported: string;
                component_not_loaded: string;
                no_supervisor: string;
                not_app: string;
                url_error: string;
                documentation: string;
                download_app: string;
                faq_link: string;
                error: string;
            };
            config: {
                generic: {
                    headers: {
                        modified_at: string;
                        created_at: string;
                        actions: string;
                    };
                };
                header: string;
                dashboard: {
                    devices: {
                        main: string;
                        secondary: string;
                    };
                    automations: {
                        main: string;
                        secondary: string;
                    };
                    backup: {
                        main: string;
                        secondary: string;
                    };
                    supervisor: {
                        main: string;
                        secondary: string;
                    };
                    dashboards: {
                        main: string;
                        secondary: string;
                    };
                    voice_assistants: {
                        main: string;
                        secondary: string;
                    };
                    energy: {
                        main: string;
                        secondary: string;
                    };
                    tags: {
                        main: string;
                        secondary: string;
                    };
                    people: {
                        main: string;
                        secondary: string;
                    };
                    areas: {
                        main: string;
                        secondary: string;
                    };
                    companion: {
                        main: string;
                        secondary: string;
                    };
                    system: {
                        main: string;
                        secondary: string;
                    };
                    about: {
                        main: string;
                        secondary: string;
                    };
                    cloud: {
                        secondary: string;
                    };
                };
                common: {
                    editor: {
                        confirm_unsaved: string;
                    };
                    multiselect: {
                        failed: string;
                    };
                    learn_more: string;
                    show_url: string;
                    hide_url: string;
                    copy_link: string;
                    graph: {
                        toggle_physics: string;
                        toggle_labels: string;
                    };
                };
                updates: {
                    caption: string;
                    description: string;
                    no_updates: string;
                    no_update_entities: {
                        title: string;
                        description: string;
                    };
                    check_updates: string;
                    no_new_updates: string;
                    updates_refreshed: string;
                    checking_updates: string;
                    title: string;
                    unable_to_fetch: string;
                    more_updates: string;
                    show: string;
                    show_skipped: string;
                    join_beta: string;
                    leave_beta: string;
                    skipped: string;
                    update_in_progress: string;
                    no_area: string;
                };
                repairs: {
                    caption: string;
                    description: string;
                    title: string;
                    no_repairs: string;
                    more_repairs: string;
                    show_ignored: string;
                    critical: string;
                    error: string;
                    warning: string;
                    system_information: string;
                    integration_startup_time: string;
                    copy: string;
                    reported_by: string;
                    created_at_by: string;
                    dialog: {
                        title: string;
                        fix: string;
                        learn: string;
                        ignore: string;
                        unignore: string;
                        breaks_in_version: string;
                        ignored_in_version_short: string;
                        ignored_in_version: string;
                    };
                };
                floors: {
                    editor: {
                        create_floor: string;
                        update_floor: string;
                        delete: string;
                        name: string;
                        icon: string;
                        level: string;
                        name_required: string;
                        floor_id: string;
                        unknown_error: string;
                        aliases_section: string;
                        no_aliases: string;
                        configured_aliases: string;
                        aliases_description: string;
                        areas_section: string;
                        areas_description: string;
                        add_area: string;
                    };
                };
                ai_task: {
                    header: string;
                    description: string;
                    gen_data_header: string;
                    gen_data_description: string;
                    gen_image_header: string;
                    gen_image_description: string;
                };
                category: {
                    caption: string;
                    assign: {
                        edit: string;
                        assign: string;
                        unknown_error: string;
                    };
                    editor: {
                        edit: string;
                        delete: string;
                        add: string;
                        create: string;
                        name: string;
                        icon: string;
                        required_error_msg: string;
                        unknown_error: string;
                        confirm_delete: string;
                        confirm_delete_text: string;
                    };
                    filter: {
                        show_all: string;
                    };
                };
                labels: {
                    caption: string;
                    description: string;
                    headers: {
                        name: string;
                        description: string;
                        icon: string;
                        color: string;
                    };
                    add_label: string;
                    manage_labels: string;
                    no_labels: string;
                    introduction: string;
                    introduction2: string;
                    confirm_remove_title: string;
                    confirm_remove: string;
                };
                areas: {
                    caption: string;
                    description: string;
                    edit_settings: string;
                    add_picture: string;
                    assigned_to_area: string;
                    targeting_area: string;
                    area_not_found: string;
                    data_table: {
                        area: string;
                        devices: string;
                        entities: string;
                    };
                    picker: {
                        header: string;
                        introduction: string;
                        introduction2: string;
                        integrations_page: string;
                        no_areas: string;
                        unassigned_areas: string;
                        create_area: string;
                        create_floor: string;
                        floor: {
                            edit_floor: string;
                            delete_floor: string;
                            confirm_delete: string;
                            confirm_delete_text: string;
                        };
                    };
                    editor: {
                        create_area: string;
                        update_area: string;
                        delete: string;
                        name: string;
                        icon: string;
                        floor: string;
                        add_labels: string;
                        name_required: string;
                        area_id: string;
                        unknown_error: string;
                        linked_entities_caption: string;
                        no_linked_entities: string;
                        aliases_section: string;
                        no_aliases: string;
                        configured_aliases: string;
                        aliases_description: string;
                        temperature_entity: string;
                        temperature_entity_description: string;
                        humidity_entity: string;
                        humidity_entity_description: string;
                        related_entities_section: string;
                    };
                    delete: {
                        confirmation_title: string;
                        confirmation_text: string;
                    };
                };
                backup: {
                    caption: string;
                    description: string;
                    description_no_backup: string;
                    create_backup: string;
                    creating_backup: string;
                    download_backup: string;
                    remove_backup: string;
                    name: string;
                    path: string;
                    size: string;
                    created: string;
                    no_backups: string;
                    backup_type: string;
                    type: {
                        manual: string;
                        automatic: string;
                        addon_update: string;
                    };
                    locations: string;
                    create: {
                        title: string;
                        description: string;
                        confirm: string;
                    };
                    remove: {
                        title: string;
                        description: string;
                        confirm: string;
                    };
                    picker: {
                        search: string;
                    };
                    dialogs: {
                        local_backup_location: {
                            title: string;
                            description: string;
                            note: string;
                            options: {
                                default_backup_mount: {
                                    name: string;
                                };
                            };
                        };
                        delete_selected: {
                            title: string;
                            text: string;
                            failed: string;
                        };
                        delete: {
                            title: string;
                            text: string;
                            failed: string;
                        };
                        upload: {
                            title: string;
                            action: string;
                            input_label: string;
                            supports_tar: string;
                            unsupported: {
                                title: string;
                                text: string;
                            };
                        };
                        generate: {
                            sync: {
                                title: string;
                                name: string;
                                locations: string;
                                locations_description: string;
                                locations_options: {
                                    all: string;
                                    custom: string;
                                };
                                ha_cloud_alert: {
                                    title: string;
                                    description: string;
                                };
                            };
                            data: {
                                title: string;
                            };
                            actions: {
                                create: string;
                            };
                        };
                        new: {
                            title: string;
                            options: string;
                            automatic: {
                                title: string;
                                description: string;
                            };
                            manual: {
                                title: string;
                                description: string;
                            };
                        };
                        restore: {
                            title: string;
                            restore_failed: string;
                            confirm: {
                                description: string;
                            };
                            encryption: {
                                different_key: string;
                                incorrect_key: string;
                                description: string;
                                warning: string;
                                input_label: string;
                            };
                            progress: {
                                restarting: string;
                                restoring: string;
                            };
                            actions: {
                                restore: string;
                            };
                        };
                        onboarding: {
                            welcome: {
                                title: string;
                                description: string;
                            };
                            key: {
                                title: string;
                                description: string;
                            };
                            setup: {
                                title: string;
                                recommended_heading: string;
                                recommended_description: string;
                                custom_heading: string;
                                custom_description: string;
                            };
                            schedule: {
                                title: string;
                                description: string;
                            };
                            data: {
                                title: string;
                                description: string;
                            };
                            locations: {
                                title: string;
                                description: string;
                            };
                            save_and_create: string;
                        };
                        change_encryption_key: {
                            current: {
                                title: string;
                                description: string;
                            };
                            new: {
                                title: string;
                                description: string;
                            };
                            done: {
                                title: string;
                            };
                            actions: {
                                change: string;
                                done: string;
                            };
                        };
                        set_encryption_key: {
                            key: {
                                title: string;
                                description: string;
                            };
                            done: {
                                title: string;
                            };
                            actions: {
                                set: string;
                                done: string;
                            };
                        };
                        show_encryption_key: {
                            title: string;
                            description: string;
                        };
                        download: {
                            decryption_unsupported_title: string;
                            decryption_unsupported: string;
                            error_check_title: string;
                            error_check_description: string;
                            title: string;
                            description: string;
                            download_backup_encrypted: string;
                            download_it_encrypted: string;
                            encryption_key: string;
                            incorrect_encryption_key: string;
                            decryption_not_supported: string;
                            download: string;
                        };
                    };
                    agents: {
                        cloud_agent_description: string;
                        cloud_agent_no_subcription: string;
                        network_mount_agent_description: string;
                        unavailable_agents: string;
                        no_agents: string;
                        encryption_turned_off: string;
                        local_agent: string;
                        retention_all: string;
                        retention_backups: string;
                        retention_days: string;
                    };
                    data: {
                        ha_settings: string;
                        ha_settings_description: string;
                        ha_settings_included_description: string;
                        history: string;
                        history_description: string;
                        media: string;
                        media_description: string;
                        share_folder: string;
                        share_folder_description: string;
                        local_addons: string;
                        local_addons_description: string;
                        addons: string;
                        addons_description: string;
                        addons_all: string;
                        addons_none: string;
                        addons_custom: string;
                        estimated_size: string;
                        estimated_size_disclaimer: string;
                        estimated_size_disclaimer_addons_custom: string;
                        estimated_size_loading: string;
                    };
                    data_picker: {
                        settings: string;
                        settings_and_history: string;
                        media: string;
                        share_folder: string;
                        local_addons: string;
                        addons: string;
                        ssl: string;
                    };
                    schedule: {
                        schedule: string;
                        backup_every: string;
                        custom_schedule: string;
                        time: string;
                        custom_time: string;
                        custom_time_label: string;
                        custom_time_description: string;
                        schedule_description: string;
                        schedule_time_description: string;
                        tip: string;
                        schedule_options: {
                            never: string;
                            daily: string;
                            custom_days: string;
                        };
                        time_options: {
                            default: string;
                            custom: string;
                        };
                        retention: string;
                        custom_retention: string;
                        custom_retention_label: string;
                        retention_description: string;
                        retention_presets: {
                            global: string;
                            copies_3: string;
                            forever: string;
                            custom: string;
                        };
                        retention_units: {
                            copies: string;
                            days: string;
                        };
                        update_preference: {
                            label: string;
                            supporting_text: string;
                            skip_backups: string;
                            backup_before_update: string;
                        };
                    };
                    encryption_key: {
                        download_emergency_kit: string;
                        download_emergency_kit_description: string;
                        download_emergency_kit_action: string;
                        download_old_emergency_kit: string;
                        download_old_emergency_kit_description: string;
                        download_old_emergency_kit_action: string;
                        show_encryption_key: string;
                        show_encryption_key_description: string;
                        show_encryption_key_action: string;
                        change_encryption_key: string;
                        change_encryption_key_description: string;
                        change_encryption_key_action: string;
                        set_encryption_key: string;
                        set_encryption_key_description: string;
                        set_encryption_key_action: string;
                    };
                    emergency_kit_file: {
                        title: string;
                        description: string;
                        date: string;
                        instance: string;
                        url: string;
                        encryption_key: string;
                        more_info: string;
                    };
                    overview: {
                        header: string;
                        menu: {
                            upload_backup: string;
                        };
                        agent_error: string;
                        new_backup: string;
                        onboarding: {
                            title: string;
                            description: string;
                            setup: string;
                        };
                        progress: {
                            heading: {
                                create_backup: string;
                                restore_backup: string;
                                receive_backup: string;
                            };
                            description: {
                                create_backup: {
                                    addon_repositories: string;
                                    addons: string;
                                    await_addon_restarts: string;
                                    docker_config: string;
                                    finishing_file: string;
                                    folders: string;
                                    home_assistant: string;
                                    upload_to_agents: string;
                                };
                                restore_backup: {
                                    addon_repositories: string;
                                    addons: string;
                                    await_addon_restarts: string;
                                    await_home_assistant_restart: string;
                                    check_home_assistant: string;
                                    docker_config: string;
                                    download_from_agent: string;
                                    folders: string;
                                    home_assistant: string;
                                    remove_delta_addons: string;
                                };
                                receive_backup: {
                                    receive_file: string;
                                    upload_to_agents: string;
                                };
                            };
                        };
                        summary: {
                            no_automatic_backup: string;
                            next_automatic_backup: string;
                            today: string;
                            tomorrow: string;
                            loading: string;
                            last_backup_failed_heading: string;
                            last_backup_failed_description: string;
                            last_backup_failed_locations_description: string;
                            last_backup_failed_addons_description: string;
                            last_backup_failed_folders_description: string;
                            last_backup_failed_addons_folders_description: string;
                            last_backup_failed_locations_addons_description: string;
                            last_backup_failed_locations_folders_description: string;
                            last_backup_failed_locations_addons_folders_description: string;
                            last_successful_backup_description: string;
                            no_backup_heading: string;
                            no_backup_description: string;
                            backup_too_old_heading: string;
                            backup_success_heading: string;
                            additional_backup_description: string;
                        };
                        backups: {
                            title: string;
                            automatic: string;
                            manual: string;
                            addon_update: string;
                            total_size: string;
                            show_all: string;
                        };
                        settings: {
                            title: string;
                            configure: string;
                            schedule: string;
                            schedule_copies_all: string;
                            schedule_copies_backups: string;
                            schedule_copies_days: string;
                            schedule_daily: string;
                            schedule_days: string;
                            schedule_weekdays: string;
                            schedule_optimized_weekdays: string;
                            schedule_weekend: string;
                            schedule_optimized_weekend: string;
                            schedule_optimized_daily: string;
                            schedule_optimized_days: string;
                            schedule_never: string;
                            data: string;
                            data_settings_history: string;
                            data_settings_only: string;
                            addons: string;
                            addons_all: string;
                            addons_many: string;
                            addons_none: string;
                            locations: string;
                            locations_one: string;
                            locations_many: string;
                            locations_local_only: string;
                            locations_none: string;
                            system_optimal_time: string;
                            weekdays: {
                                mon: string;
                                tue: string;
                                wed: string;
                                thu: string;
                                fri: string;
                                sat: string;
                                sun: string;
                            };
                            short_weekdays: {
                                mon: string;
                                tue: string;
                                wed: string;
                                thu: string;
                                fri: string;
                                sat: string;
                                sun: string;
                            };
                        };
                    };
                    backups: {
                        header: string;
                        menu: {
                            upload_backup: string;
                        };
                        delete_selected: string;
                        new_backup: string;
                    };
                    settings: {
                        header: string;
                        menu: {
                            change_default_location: string;
                        };
                        schedule: {
                            title: string;
                            description: string;
                        };
                        data: {
                            title: string;
                        };
                        locations: {
                            title: string;
                            description: string;
                            no_location: string;
                            no_location_description: string;
                            more_locations: string;
                            manage_network_storage: string;
                            ha_cloud_backup: string;
                            ha_cloud_description: string;
                        };
                        encryption_key: {
                            title: string;
                            description: string;
                        };
                        addon_update_backup: {
                            title: string;
                            description: string;
                            local_only: string;
                            retention_description: string;
                            error_load: string;
                            error_save: string;
                        };
                    };
                    details: {
                        header: string;
                        not_found: string;
                        not_found_description: string;
                        error: string;
                        summary: {
                            title: string;
                            size: string;
                            created: string;
                            error: {
                                title: string;
                                failed_locations: string;
                                failed_addons: string;
                                failed_folders: string;
                            };
                        };
                        restore: {
                            title: string;
                            action: string;
                        };
                        locations: {
                            title: string;
                            backup_failed: string;
                            encryption_turned_off: string;
                            download: string;
                            unencrypted: string;
                            encrypted: string;
                        };
                    };
                    location: {
                        header: string;
                        save_error: string;
                        retention_for_this_system: string;
                        retention_for_location: string;
                        not_found: string;
                        not_found_description: string;
                        error: string;
                        configuration: {
                            title: string;
                            cloud_description: string;
                        };
                        encryption: {
                            title: string;
                            description: string;
                            location_encrypted: string;
                            location_unencrypted: string;
                            location_encrypted_description: string;
                            location_encrypted_cloud_description: string;
                            location_encrypted_cloud_learn_more: string;
                            location_unencrypted_description: string;
                            encryption_turn_on: string;
                            encryption_turn_off: string;
                            encryption_turn_off_confirm_title: string;
                            encryption_turn_off_confirm_text: string;
                            encryption_turn_off_confirm_action: string;
                            warning_encryption_turn_off: string;
                            warning_encryption_turn_off_description: string;
                        };
                    };
                };
                tag: {
                    caption: string;
                    description: string;
                    learn_more: string;
                    no_tags: string;
                    add_tag: string;
                    write: string;
                    never_scanned: string;
                    create_automation: string;
                    confirm_delete_title: string;
                    confirm_delete: string;
                    automation_title: string;
                    qr_code_image: string;
                    headers: {
                        icon: string;
                        name: string;
                        last_scanned: string;
                        write: string;
                    };
                    detail: {
                        new_tag: string;
                        name: string;
                        description: string;
                        tag_id: string;
                        tag_id_placeholder: string;
                        delete: string;
                        update: string;
                        create: string;
                        create_and_write: string;
                        required_error_msg: string;
                        usage: string;
                        companion_apps: string;
                    };
                };
                energy: {
                    caption: string;
                    description: string;
                    new_device_info: string;
                    delete_source: string;
                    delete_integration: string;
                    grid: {
                        title: string;
                        sub: string;
                        learn_more: string;
                        grid_consumption: string;
                        edit_consumption: string;
                        delete_consumption: string;
                        add_consumption: string;
                        return_to_grid: string;
                        edit_return: string;
                        delete_return: string;
                        add_return: string;
                        grid_carbon_footprint: string;
                        remove_co2_signal: string;
                        add_co2_signal: string;
                        flow_dialog: {
                            from: {
                                header: string;
                                paragraph: string;
                                entity_para: string;
                                energy_stat: string;
                                cost_para: string;
                                no_cost: string;
                                cost_stat: string;
                                cost_stat_input: string;
                                cost_entity: string;
                                cost_entity_input: string;
                                cost_number: string;
                                cost_number_input: string;
                            };
                            to: {
                                header: string;
                                paragraph: string;
                                entity_para: string;
                                energy_stat: string;
                                cost_para: string;
                                no_cost: string;
                                cost_stat: string;
                                cost_stat_input: string;
                                cost_entity: string;
                                cost_entity_input: string;
                                cost_number: string;
                                cost_number_input: string;
                            };
                        };
                    };
                    solar: {
                        title: string;
                        sub: string;
                        learn_more: string;
                        solar_production: string;
                        edit_solar_production: string;
                        delete_solar_production: string;
                        add_solar_production: string;
                        stat_production: string;
                        stat_return_to_grid: string;
                        stat_predicted_production: string;
                        dialog: {
                            header: string;
                            entity_para: string;
                            solar_production_energy: string;
                            solar_production_forecast: string;
                            solar_production_forecast_description: string;
                            dont_forecast_production: string;
                            forecast_production: string;
                            add_forecast: string;
                        };
                    };
                    battery: {
                        title: string;
                        sub: string;
                        learn_more: string;
                        battery_systems: string;
                        edit_battery_system: string;
                        delete_battery_system: string;
                        add_battery_system: string;
                        dialog: {
                            header: string;
                            entity_para: string;
                            energy_into_battery: string;
                            energy_out_of_battery: string;
                        };
                    };
                    gas: {
                        title: string;
                        sub: string;
                        learn_more: string;
                        gas_consumption: string;
                        edit_gas_source: string;
                        delete_gas_source: string;
                        add_gas_source: string;
                        dialog: {
                            header: string;
                            paragraph: string;
                            entity_para: string;
                            note_para: string;
                            cost_para: string;
                            no_cost: string;
                            cost_stat: string;
                            cost_stat_input: string;
                            cost_entity: string;
                            cost_entity_input: string;
                            cost_number: string;
                            cost_number_input: string;
                            gas_usage: string;
                        };
                    };
                    water: {
                        title: string;
                        sub: string;
                        learn_more: string;
                        water_consumption: string;
                        edit_water_source: string;
                        delete_water_source: string;
                        add_water_source: string;
                        dialog: {
                            header: string;
                            paragraph: string;
                            entity_para: string;
                            cost_para: string;
                            no_cost: string;
                            cost_stat: string;
                            cost_stat_input: string;
                            cost_entity: string;
                            cost_entity_input: string;
                            cost_number: string;
                            cost_number_input: string;
                            water_usage: string;
                        };
                    };
                    device_consumption: {
                        title: string;
                        sub: string;
                        learn_more: string;
                        add_stat: string;
                        selected_stat: string;
                        devices: string;
                        add_device: string;
                        dialog: {
                            header: string;
                            display_name: string;
                            device_consumption_energy: string;
                            selected_stat_intro: string;
                            included_in_device: string;
                            included_in_device_helper: string;
                            no_upstream_devices: string;
                        };
                    };
                };
                helpers: {
                    caption: string;
                    description: string;
                    types: {
                        input_text: string;
                        input_number: string;
                        input_select: string;
                        input_boolean: string;
                        input_button: string;
                        input_datetime: string;
                        counter: string;
                        timer: string;
                        schedule: string;
                    };
                    picker: {
                        headers: {
                            icon: string;
                            name: string;
                            entity_id: string;
                            type: string;
                            editable: string;
                            category: string;
                        };
                        create_helper: string;
                        no_helpers: string;
                        search: string;
                        error_information: string;
                    };
                    dialog: {
                        create: string;
                        create_helper: string;
                        create_platform: string;
                    };
                };
                core: {
                    caption: string;
                    description: string;
                    section: {
                        core: {
                            header: string;
                            introduction: string;
                            core_config: {
                                edit_requires_storage: string;
                                location_name: string;
                                latitude: string;
                                longitude: string;
                                elevation: string;
                                elevation_meters: string;
                                time_zone: string;
                                language: string;
                                country: string;
                                unit_system: string;
                                unit_system_us_customary: string;
                                unit_system_metric: string;
                                us_customary_example: string;
                                metric_example: string;
                                find_currency_value: string;
                                save_button: string;
                                currency: string;
                                edit_location: string;
                                edit_location_description: string;
                                update_units_label: string;
                                update_units_text_1: string;
                                update_units_text_2: string;
                                update_units_text_3: string;
                                update_units_confirm_title: string;
                                update_units_confirm_text: string;
                                update_units_confirm_update: string;
                            };
                        };
                    };
                };
                url: {
                    caption: string;
                    description: string;
                    internal_url_label: string;
                    external_url_label: string;
                    external_use_ha_cloud: string;
                    manage_ha_cloud: string;
                    external_get_ha_cloud: string;
                    ha_cloud_remote_not_enabled: string;
                    enable_remote: string;
                    internal_url_automatic: string;
                    internal_url_https_error_title: string;
                    internal_url_https_error_description: string;
                    internal_url_automatic_description: string;
                    internal_url_placeholder: string;
                };
                hardware: {
                    caption: string;
                    description: string;
                    available_hardware: {
                        failed_to_get: string;
                        title: string;
                        search: string;
                        subsystem: string;
                        device_path: string;
                        id: string;
                        attributes: string;
                    };
                    reboot_moved_title: string;
                    reboot_moved_description: string;
                    reboot_moved_link: string;
                    processor: string;
                    memory: string;
                    generic_hardware: string;
                    documentation: string;
                    configure: string;
                    documentation_description: string;
                    restart_homeassistant: string;
                    loading_system_data: string;
                };
                info: {
                    caption: string;
                    installation_method: string;
                    external_app_version: string;
                    copy_menu: string;
                    copy_raw: string;
                    copy_github: string;
                    description: string;
                    home_assistant_logo: string;
                    developed_by: string;
                    license: string;
                    source: string;
                    server: string;
                    frontend: string;
                    built_using: string;
                    icons_by: string;
                    frontend_version_label: string;
                    proud_part_of: string;
                    custom_uis: string;
                    system_health_error: string;
                    documentation: string;
                    issues: string;
                    setup_time: string;
                    system_health: {
                        manage: string;
                        more_info: string;
                    };
                    items: {
                        change_log: string;
                        thanks: string;
                        merch: string;
                        feature: string;
                        bug: string;
                        help: string;
                        license: string;
                    };
                    shortcuts: string;
                };
                logs: {
                    caption: string;
                    description: string;
                    details: string;
                    search: string;
                    failed_get_logs: string;
                    no_issues_search: string;
                    load_logs: string;
                    nr_of_lines: string;
                    loading_log: string;
                    no_errors: string;
                    no_issues: string;
                    clear: string;
                    refresh: string;
                    copy: string;
                    log_provider: string;
                    multiple_messages: string;
                    level: {
                        critical: string;
                        error: string;
                        warning: string;
                        info: string;
                        debug: string;
                    };
                    custom_integration: string;
                    error_from_custom_integration: string;
                    show_full_logs: string;
                    show_condensed_logs: string;
                    select_number_of_lines: string;
                    lines: string;
                    download_logs: string;
                    scroll_down_button: string;
                    provider_not_found: string;
                    provider_not_available: string;
                    haos_boots_title: string;
                    show_haos_boots: string;
                    hide_haos_boots: string;
                    full_width: string;
                    wrap_lines: string;
                    current: string;
                    previous: string;
                    startups_ago: string;
                    detail: {
                        logger: string;
                        source: string;
                        integration: string;
                        documentation: string;
                        issues: string;
                        first_occurred: string;
                        number_of_occurrences: string;
                        last_logged: string;
                    };
                };
                lovelace: {
                    caption: string;
                    description: string;
                    dashboards: {
                        default_dashboard: string;
                        caption: string;
                        conf_mode: {
                            yaml: string;
                            storage: string;
                        };
                        dialog_new: {
                            header: string;
                            create_empty: string;
                            create_empty_description: string;
                            default: string;
                            default_description: string;
                            strategy: {
                                map: {
                                    title: string;
                                    description: string;
                                };
                                iframe: {
                                    title: string;
                                    description: string;
                                };
                                areas: {
                                    title: string;
                                    description: string;
                                };
                                default: {
                                    title: string;
                                    description: string;
                                };
                                overview: {
                                    title: string;
                                    description: string;
                                };
                                home: {
                                    title: string;
                                    description: string;
                                };
                            };
                            search_dashboards: string;
                            heading: {
                                default: string;
                            };
                        };
                        picker: {
                            headers: {
                                icon: string;
                                title: string;
                                conf_mode: string;
                                default: string;
                                require_admin: string;
                                sidebar: string;
                                filename: string;
                                url: string;
                                type: string;
                            };
                            open: string;
                            edit: string;
                            delete: string;
                            add_dashboard: string;
                            type: {
                                user_created: string;
                                built_in: string;
                            };
                        };
                        confirm_delete_title: string;
                        confirm_delete_text: string;
                        cant_edit_yaml: string;
                        cant_edit_default: string;
                        detail: {
                            edit_dashboard: string;
                            new_dashboard: string;
                            show_sidebar: string;
                            icon: string;
                            title: string;
                            title_required: string;
                            url: string;
                            url_error_msg: string;
                            require_admin: string;
                            delete: string;
                            update: string;
                            create: string;
                            set_default: string;
                            remove_default: string;
                        };
                    };
                    resources: {
                        caption: string;
                        types: {
                            css: string;
                            html: string;
                            js: string;
                            module: string;
                        };
                        unavailable: string;
                        unavailable_safe_mode: string;
                        picker: {
                            headers: {
                                url: string;
                                type: string;
                                delete: string;
                            };
                            no_resources: string;
                            add_resource: string;
                        };
                        confirm_delete_title: string;
                        confirm_delete_text: string;
                        refresh_header: string;
                        refresh_body: string;
                        cant_edit_yaml: string;
                        detail: {
                            new_resource: string;
                            edit_resource: string;
                            warning_header: string;
                            warning_text: string;
                            url: string;
                            url_error_msg: string;
                            type: string;
                            delete: string;
                            update: string;
                            create: string;
                        };
                    };
                };
                voice_assistants: {
                    assistants: {
                        caption: string;
                        pipeline: {
                            link_learn_how_it_works: string;
                            add_assistant: string;
                            exposed_entities: string;
                            assist_devices: string;
                            delete: {
                                confirm_title: string;
                                confirm_text: string;
                                error_preferred: string;
                            };
                            start_conversation: string;
                            devices: {
                                title: string;
                                device: string;
                                pipeline: string;
                                area: string;
                            };
                            detail: {
                                update_assistant_action: string;
                                add_assistant_title: string;
                                add_assistant_action: string;
                                try_tts: string;
                                debug: string;
                                set_as_preferred: string;
                                add_streaming_wake_word: string;
                                form: {
                                    name: string;
                                    conversation_engine: string;
                                    conversation_language: string;
                                    prefer_local_intents: string;
                                    prefer_local_intents_description: string;
                                    language: string;
                                    stt_engine: string;
                                    stt_language: string;
                                    tts_engine: string;
                                    tts_language: string;
                                    tts_voice: string;
                                    wake_word_entity: string;
                                    wake_word_id: string;
                                };
                                steps: {
                                    config: {
                                        title: string;
                                        description: string;
                                    };
                                    conversation: {
                                        title: string;
                                        description: string;
                                    };
                                    stt: {
                                        title: string;
                                        description: string;
                                    };
                                    tts: {
                                        title: string;
                                        description: string;
                                    };
                                    wakeword: {
                                        title: string;
                                        description: string;
                                        note: string;
                                    };
                                };
                                no_cloud_message: string;
                                no_cloud_action: string;
                            };
                        };
                        cloud: {
                            title: string;
                            features: {
                                assistants: {
                                    title: string;
                                    text: string;
                                };
                                speech: {
                                    title: string;
                                    text: string;
                                };
                                remote_access: {
                                    title: string;
                                    text: string;
                                };
                            };
                            and_more: string;
                            try_one_month: string;
                            sign_in: string;
                        };
                    };
                    debug: {
                        header: string;
                        no_runs_found: string;
                        older_run: string;
                        newer_run: string;
                        start_debug_run: string;
                        pipeline: {
                            header: string;
                            run_text_pipeline: string;
                            run_audio_pipeline: string;
                            run_audio_with_wake: string;
                            response: string;
                            send: string;
                            continue_listening: string;
                            continue_talking: string;
                            continue_conversation: string;
                            input_text: string;
                            run: string;
                            error_starting: string;
                        };
                    };
                    expose: {
                        caption: string;
                        headers: {
                            icon: string;
                            name: string;
                            entity_id: string;
                            area: string;
                            domain: string;
                            assistants: string;
                            aliases: string;
                            remove: string;
                        };
                        aliases: string;
                        expose: string;
                        unexpose: string;
                        add: string;
                        expose_confirm_title: string;
                        expose_confirm_text: string;
                        unexpose_confirm_title: string;
                        unexpose_confirm_text: string;
                        manually_configured: string;
                        not_supported: string;
                        expose_dialog: {
                            header: string;
                            expose_to: string;
                            expose_entities: string;
                        };
                        expose_new_entities: string;
                        expose_new_entities_info: string;
                    };
                    satellite_wizard: {
                        skip: string;
                        not_available: string;
                        update: {
                            title: string;
                            checking: string;
                            secondary: string;
                        };
                        check: {
                            title: string;
                            secondary: string;
                            failed_title: string;
                            failed_secondary: string;
                            help: string;
                            retry: string;
                        };
                        wake_word: {
                            title: string;
                            secondary: string;
                            title_2: string;
                            secondary_2: string;
                            change_wake_word: string;
                            time_out: string;
                            muted: string;
                            muted_description: string;
                        };
                        change_wake_word: {
                            title: string;
                            secondary: string;
                        };
                        area: {
                            title: string;
                            secondary: string;
                            no_selection: string;
                        };
                        pipeline: {
                            title: string;
                            performance: {
                                header: string;
                                low: string;
                                high: string;
                            };
                            commands: {
                                header: string;
                                low: string;
                                ready: string;
                                high: string;
                            };
                            options: {
                                cloud: {
                                    label: string;
                                    description: string;
                                };
                                focused_local: {
                                    label: string;
                                    description: string;
                                };
                                full_local: {
                                    label: string;
                                    description: string;
                                };
                            };
                            unsupported: string;
                            unsupported_language: {
                                header: string;
                                secondary: string;
                                language_picker: string;
                                contribute: string;
                            };
                        };
                        cloud: {
                            title: string;
                            register: {
                                confirm_email: string;
                            };
                        };
                        local: {
                            title: string;
                            secondary: string;
                            failed_title: string;
                            failed_secondary: string;
                            not_supported_title: string;
                            not_supported_secondary: string;
                            full_local_pipeline: string;
                            focused_local_pipeline: string;
                            state: {
                                installing_piper: string;
                                starting_piper: string;
                                setup_piper: string;
                                "installing_faster-whisper": string;
                                "starting_faster-whisper": string;
                                "setup_faster-whisper": string;
                                "installing_speech-to-phrase": string;
                                "starting_speech-to-phrase": string;
                                "setup_speech-to-phrase": string;
                                creating_pipeline: string;
                            };
                            errors: {
                                failed_create_entry: string;
                                could_not_find_entities: string;
                            };
                        };
                        success: {
                            title: string;
                            secondary: string;
                            test_wakeword: string;
                            edit_pipeline: string;
                            try_tts: string;
                            done: string;
                            failed_rename: string;
                        };
                    };
                };
                automation: {
                    caption: string;
                    description: string;
                    picker: {
                        header: string;
                        introduction: string;
                        learn_more: string;
                        pick_automation: string;
                        no_automations: string;
                        add_automation: string;
                        only_editable: string;
                        dev_only_editable: string;
                        edit_automation: string;
                        dev_automation: string;
                        show_info_automation: string;
                        show_settings: string;
                        delete: string;
                        delete_confirm_title: string;
                        delete_confirm_text: string;
                        duplicate: string;
                        disabled: string;
                        state: string;
                        filtered_by_blueprint: string;
                        traces_not_available: string;
                        edit_category: string;
                        assign_category: string;
                        no_category_support: string;
                        no_category_entity_reg: string;
                        search: string;
                        headers: {
                            toggle: string;
                            name: string;
                            trigger: string;
                            actions: string;
                            state: string;
                            category: string;
                            area: string;
                            icon: string;
                        };
                        bulk_action: string;
                        bulk_actions: {
                            move_category: string;
                            no_category: string;
                            add_label: string;
                            enable: string;
                            disable: string;
                        };
                        empty_header: string;
                        empty_text_1: string;
                        empty_text_2: string;
                        migrate_automation: string;
                        migrate_automation_description: string;
                    };
                    dialog_new: {
                        header: string;
                        create_empty: string;
                        create_empty_description: string;
                        create_blueprint: string;
                        create_blueprint_description: string;
                        blueprint_source: {
                            author: string;
                            local: string;
                            community: string;
                            homeassistant: string;
                        };
                        discover_blueprint_tip: string;
                    };
                    editor: {
                        enable: string;
                        disable: string;
                        disabled: string;
                        read_only: string;
                        unavailable: string;
                        migrate: string;
                        duplicate: string;
                        take_control: string;
                        confirm_take_control: string;
                        run: string;
                        rename: string;
                        show_trace: string;
                        show_info: string;
                        default_name: string;
                        missing_name: string;
                        traces_not_available: string;
                        load_error_not_editable: string;
                        load_error_not_deletable: string;
                        load_error_unknown: string;
                        unsaved_confirm_title: string;
                        unsaved_confirm_text: string;
                        alias: string;
                        automation_alias: string;
                        automation_settings: string;
                        move_up: string;
                        move_down: string;
                        collapse_all: string;
                        expand_all: string;
                        description: {
                            label: string;
                            placeholder: string;
                            add: string;
                        };
                        leave: {
                            unsaved_new_title: string;
                            unsaved_new_text: string;
                            unsaved_confirm_title: string;
                            unsaved_confirm_text: string;
                        };
                        icon: string;
                        blueprint: {
                            header: string;
                            blueprint_to_use: string;
                            no_blueprints: string;
                            no_inputs: string;
                        };
                        change_mode: string;
                        modes: {
                            label: string;
                            learn_more: string;
                            single: string;
                            single_description: string;
                            restart: string;
                            restart_description: string;
                            queued: string;
                            queued_description: string;
                            parallel: string;
                            parallel_description: string;
                        };
                        max: {
                            queued: string;
                            parallel: string;
                        };
                        edit_yaml: string;
                        edit_ui: string;
                        copy_to_clipboard: string;
                        unknown_entity: string;
                        edit_unknown_device: string;
                        switch_ui_yaml_error: string;
                        type_automation: string;
                        type_script: string;
                        type_automation_plural: string;
                        type_script_plural: string;
                        new_automation_setup_failed_title: string;
                        new_automation_setup_failed_text: string;
                        new_automation_setup_keep_waiting: string;
                        new_automation_setup_timedout_success: string;
                        item_pasted: string;
                        ctrl: string;
                        del: string;
                        blocks: string;
                        triggers: {
                            name: string;
                            header: string;
                            description: string;
                            learn_more: string;
                            triggered: string;
                            add: string;
                            empty_search: string;
                            id: string;
                            optional: string;
                            edit_id: string;
                            duplicate: string;
                            re_order: string;
                            rename: string;
                            cut: string;
                            copy: string;
                            paste: string;
                            change_alias: string;
                            alias: string;
                            delete: string;
                            unsupported_platform: string;
                            type_select: string;
                            unknown_trigger: string;
                            triggering_event_detail: string;
                            trigger: string;
                            copied_to_clipboard: string;
                            cut_to_clipboard: string;
                            select: string;
                            groups: {
                                device: {
                                    label: string;
                                };
                                entity: {
                                    label: string;
                                };
                                time_location: {
                                    label: string;
                                };
                                other: {
                                    label: string;
                                };
                            };
                            type: {
                                calendar: {
                                    label: string;
                                    event: string;
                                    start: string;
                                    end: string;
                                    offset: string;
                                    before: string;
                                    after: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                device: {
                                    label: string;
                                    trigger: string;
                                    description: {
                                        picker: string;
                                    };
                                };
                                event: {
                                    label: string;
                                    event_type: string;
                                    event_data: string;
                                    context_users: string;
                                    context_user_picked: string;
                                    context_user_pick: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                geo_location: {
                                    label: string;
                                    source: string;
                                    zone: string;
                                    event: string;
                                    enter: string;
                                    leave: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                state: {
                                    label: string;
                                    attribute: string;
                                    from: string;
                                    for: string;
                                    to: string;
                                    any_state_ignore_attributes: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                homeassistant: {
                                    label: string;
                                    event: string;
                                    start: string;
                                    shutdown: string;
                                    description: {
                                        picker: string;
                                        started: string;
                                        shutdown: string;
                                    };
                                };
                                mqtt: {
                                    label: string;
                                    topic: string;
                                    payload: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                numeric_state: {
                                    label: string;
                                    above: string;
                                    below: string;
                                    lower_limit: string;
                                    upper_limit: string;
                                    value_template: string;
                                    type_value: string;
                                    type_input: string;
                                    description: {
                                        picker: string;
                                        above: string;
                                        below: string;
                                        "above-below": string;
                                    };
                                };
                                persistent_notification: {
                                    label: string;
                                    notification_id: string;
                                    update_type: string;
                                    update_types: {
                                        added: string;
                                        removed: string;
                                        current: string;
                                        updated: string;
                                    };
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                sun: {
                                    label: string;
                                    event: string;
                                    sunrise: string;
                                    sunset: string;
                                    offset: string;
                                    description: {
                                        picker: string;
                                        sets: string;
                                        rises: string;
                                    };
                                };
                                conversation: {
                                    label: string;
                                    no_punctuation: string;
                                    add_sentence: string;
                                    delete: string;
                                    confirm_delete: string;
                                    description: {
                                        picker: string;
                                        empty: string;
                                        single: string;
                                        multiple: string;
                                    };
                                };
                                tag: {
                                    label: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                        known_tag: string;
                                    };
                                };
                                template: {
                                    label: string;
                                    value_template: string;
                                    for: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                time: {
                                    type_value: string;
                                    type_input: string;
                                    label: string;
                                    at: string;
                                    offset: string;
                                    entity: string;
                                    offset_by: string;
                                    mode: string;
                                    weekday: string;
                                    weekdays: {
                                        mon: string;
                                        tue: string;
                                        wed: string;
                                        thu: string;
                                        fri: string;
                                        sat: string;
                                        sun: string;
                                    };
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                time_pattern: {
                                    label: string;
                                    help: string;
                                    hours: string;
                                    minutes: string;
                                    seconds: string;
                                    description: {
                                        picker: string;
                                        initial: string;
                                        invalid: string;
                                        full: string;
                                        ordinal: string;
                                    };
                                };
                                webhook: {
                                    copy_url: string;
                                    label: string;
                                    local_only: string;
                                    webhook_id: string;
                                    webhook_id_helper: string;
                                    webhook_settings: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                zone: {
                                    label: string;
                                    entity: string;
                                    zone: string;
                                    event: string;
                                    enter: string;
                                    leave: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                list: {
                                    label: string;
                                    description: {
                                        no_trigger: string;
                                        full: string;
                                    };
                                };
                            };
                        };
                        conditions: {
                            name: string;
                            header: string;
                            description: string;
                            learn_more: string;
                            add: string;
                            empty_search: string;
                            add_building_block: string;
                            test: string;
                            testing_error: string;
                            testing_pass: string;
                            invalid_condition: string;
                            test_failed: string;
                            duplicate: string;
                            re_order: string;
                            rename: string;
                            cut: string;
                            copy: string;
                            paste: string;
                            change_alias: string;
                            alias: string;
                            delete: string;
                            unsupported_condition: string;
                            type_select: string;
                            unknown_condition: string;
                            condition: string;
                            copied_to_clipboard: string;
                            cut_to_clipboard: string;
                            select: string;
                            groups: {
                                device: {
                                    label: string;
                                };
                                entity: {
                                    label: string;
                                };
                                time_location: {
                                    label: string;
                                };
                                other: {
                                    label: string;
                                };
                                building_blocks: {
                                    label: string;
                                };
                            };
                            type: {
                                and: {
                                    label: string;
                                    description: {
                                        picker: string;
                                        no_conditions: string;
                                        full: string;
                                    };
                                };
                                device: {
                                    label: string;
                                    condition: string;
                                    description: {
                                        picker: string;
                                    };
                                };
                                not: {
                                    label: string;
                                    description: {
                                        picker: string;
                                        no_conditions: string;
                                        one_condition: string;
                                        full: string;
                                    };
                                };
                                numeric_state: {
                                    type_value: string;
                                    type_input: string;
                                    label: string;
                                    above: string;
                                    below: string;
                                    lower_limit: string;
                                    upper_limit: string;
                                    value_template: string;
                                    description: {
                                        picker: string;
                                        above: string;
                                        below: string;
                                        "above-below": string;
                                    };
                                };
                                or: {
                                    label: string;
                                    description: {
                                        picker: string;
                                        no_conditions: string;
                                        full: string;
                                    };
                                };
                                state: {
                                    label: string;
                                    state: string;
                                    description: {
                                        picker: string;
                                        no_entity: string;
                                        full: string;
                                    };
                                };
                                sun: {
                                    label: string;
                                    before: string;
                                    after: string;
                                    before_offset: string;
                                    after_offset: string;
                                    sunrise: string;
                                    sunset: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                template: {
                                    label: string;
                                    value_template: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                time: {
                                    type_value: string;
                                    type_input: string;
                                    label: string;
                                    after: string;
                                    before: string;
                                    weekday: string;
                                    mode_after: string;
                                    mode_before: string;
                                    weekdays: {
                                        mon: string;
                                        tue: string;
                                        wed: string;
                                        thu: string;
                                        fri: string;
                                        sat: string;
                                        sun: string;
                                    };
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                trigger: {
                                    label: string;
                                    no_triggers: string;
                                    id: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                zone: {
                                    label: string;
                                    entity: string;
                                    zone: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                            };
                        };
                        actions: {
                            name: string;
                            header: string;
                            description: string;
                            learn_more: string;
                            add: string;
                            empty_search: string;
                            add_building_block: string;
                            invalid_action: string;
                            run: string;
                            run_action_error: string;
                            run_action_success: string;
                            duplicate: string;
                            re_order: string;
                            rename: string;
                            cut: string;
                            copy: string;
                            paste: string;
                            change_alias: string;
                            alias: string;
                            enable: string;
                            disable: string;
                            disabled: string;
                            delete: string;
                            unsupported_action: string;
                            type_select: string;
                            continue_on_error: string;
                            action: string;
                            copied_to_clipboard: string;
                            cut_to_clipboard: string;
                            select: string;
                            groups: {
                                device_id: {
                                    label: string;
                                };
                                helpers: {
                                    label: string;
                                };
                                other: {
                                    label: string;
                                };
                                building_blocks: {
                                    label: string;
                                };
                            };
                            type: {
                                service: {
                                    label: string;
                                    response_variable: string;
                                    has_optional_response: string;
                                    has_response: string;
                                    description: {
                                        picker: string;
                                        service_based_on_template: string;
                                        service_based_on_name: string;
                                        service_name: string;
                                        service_based_on_template_no_targets: string;
                                        service_based_on_name_no_targets: string;
                                        service_name_no_targets: string;
                                        service: string;
                                        target_template: string;
                                        target_every_entity: string;
                                        target_unknown_entity: string;
                                        target_unknown_device: string;
                                        target_unknown_area: string;
                                        target_unknown_floor: string;
                                        target_unknown_label: string;
                                    };
                                };
                                play_media: {
                                    label: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                delay: {
                                    label: string;
                                    delay: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                        duration_string: string;
                                        duration_template: string;
                                        duration_unknown: string;
                                    };
                                };
                                wait_template: {
                                    label: string;
                                    wait_template: string;
                                    timeout: string;
                                    continue_timeout: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                wait_for_trigger: {
                                    label: string;
                                    timeout: string;
                                    continue_timeout: string;
                                    description: {
                                        picker: string;
                                        wait_for_a_trigger: string;
                                        wait_for_triggers: string;
                                    };
                                };
                                condition: {
                                    label: string;
                                    description: {
                                        picker: string;
                                    };
                                };
                                event: {
                                    label: string;
                                    event: string;
                                    event_data: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                        template: string;
                                    };
                                };
                                device_id: {
                                    label: string;
                                    action: string;
                                    description: {
                                        picker: string;
                                        no_device: string;
                                        perform_device_action: string;
                                    };
                                };
                                repeat: {
                                    label: string;
                                    type: {
                                        count: {
                                            label: string;
                                        };
                                        while: {
                                            label: string;
                                            conditions: string;
                                        };
                                        until: {
                                            label: string;
                                            conditions: string;
                                        };
                                        for_each: {
                                            label: string;
                                            items: string;
                                        };
                                    };
                                    sequence: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                        count: string;
                                        while_count: string;
                                        until_count: string;
                                        for_each: string;
                                    };
                                };
                                repeat_count: {
                                    label: string;
                                    description: {
                                        picker: string;
                                    };
                                };
                                repeat_while: {
                                    label: string;
                                    description: {
                                        picker: string;
                                    };
                                };
                                repeat_until: {
                                    label: string;
                                    description: {
                                        picker: string;
                                    };
                                };
                                repeat_for_each: {
                                    label: string;
                                    description: {
                                        picker: string;
                                    };
                                };
                                choose: {
                                    label: string;
                                    default: string;
                                    add_default: string;
                                    option: string;
                                    add_option: string;
                                    remove_option: string;
                                    change_alias: string;
                                    alias: string;
                                    delete_confirm_title: string;
                                    option_description_additional: string;
                                    conditions: string;
                                    no_conditions: string;
                                    sequence: string;
                                    option_label: string;
                                    default_option_label: string;
                                    option_description: string;
                                    default_option_description: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                        no_action: string;
                                    };
                                };
                                if: {
                                    label: string;
                                    if: string;
                                    then: string;
                                    else: string;
                                    add_else: string;
                                    description: {
                                        picker: string;
                                        if: string;
                                        if_else: string;
                                    };
                                };
                                stop: {
                                    label: string;
                                    stop: string;
                                    response_variable: string;
                                    error: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                sequence: {
                                    label: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                parallel: {
                                    label: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                variables: {
                                    label: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                check_condition: {
                                    description: {
                                        full: string;
                                    };
                                };
                                set_conversation_response: {
                                    label: string;
                                    description: {
                                        picker: string;
                                        template: string;
                                        full: string;
                                    };
                                };
                                unknown: {
                                    label: string;
                                };
                            };
                        };
                        dialog: {
                            add_description: string;
                            add_icon: string;
                            add_category: string;
                            add_labels: string;
                            add_area: string;
                        };
                        paste_confirm: {
                            title: string;
                            text: string;
                        };
                        paste_toast_message: string;
                        paste_invalid_yaml: string;
                        paste_invalid_config: string;
                    };
                    trace: {
                        refresh: string;
                        download_trace: string;
                        edit_automation: string;
                        older_trace: string;
                        newer_trace: string;
                        no_traces_found: string;
                        trace_no_longer_available: string;
                        enter_downloaded_trace: string;
                        tabs: {
                            details: string;
                            timeline: string;
                            logbook: string;
                            automation_config: string;
                            step_config: string;
                            changed_variables: string;
                            blueprint_config: string;
                            script_config: string;
                        };
                        path: {
                            choose: string;
                            default_action_executed: string;
                            no_further_execution: string;
                            disabled_step: string;
                            iteration: string;
                            executed: string;
                            error: string;
                            result: string;
                            step_not_executed: string;
                            no_logbook_entries: string;
                            no_variables_changed: string;
                            unable_to_find_config: string;
                        };
                        messages: {
                            no_action_executed: string;
                            default_action_executed: string;
                            action_executed: string;
                            option_executed: string;
                            error: string;
                            execute_in_parallel: string;
                            if: string;
                            choose: string;
                            still_running: string;
                            debugged: string;
                            finished: string;
                            aborted: string;
                            cancelled: string;
                            stopped_failed_conditions: string;
                            stopped_failed_single: string;
                            stopped_failed_max_runs: string;
                            stopped_error: string;
                            stopped_unknown_reason: string;
                            disabled: string;
                            triggered_by: string;
                            path_error: string;
                            not_all_entries_are_related_automation_note: string;
                            not_all_entries_are_related_script_note: string;
                        };
                    };
                };
                blueprint: {
                    caption: string;
                    description: string;
                    overview: {
                        header: string;
                        introduction: string;
                        learn_more: string;
                        headers: {
                            name: string;
                            type: string;
                            file_name: string;
                        };
                        types: {
                            automation: string;
                            script: string;
                        };
                        types_plural: {
                            automation: string;
                            script: string;
                        };
                        error: string;
                        blueprint_in_use_title: string;
                        blueprint_in_use_text: string;
                        blueprint_in_use_view: string;
                        confirm_delete_title: string;
                        confirm_delete_text: string;
                        add_blueprint: string;
                        no_blueprints: string;
                        create_automation: string;
                        create_script: string;
                        view_automation: string;
                        view_script: string;
                        delete_blueprint: string;
                        share_blueprint: string;
                        share_blueprint_no_url: string;
                        re_import_blueprint: string;
                        re_import_blueprint_no_url: string;
                        re_import_confirm_title: string;
                        re_import_confirm_text: string;
                        re_import_confirm_action: string;
                        re_import_error_source_not_found: string;
                        re_import_error_save: string;
                        re_import_success: string;
                        discover_more: string;
                    };
                    add: {
                        header: string;
                        import_header: string;
                        import_introduction: string;
                        community_forums: string;
                        url: string;
                        raw_blueprint: string;
                        importing: string;
                        import_btn: string;
                        saving: string;
                        save_btn: string;
                        save_btn_override: string;
                        override_title: string;
                        override_description: string;
                        error_no_url: string;
                        unsupported_blueprint: string;
                        file_name: string;
                    };
                };
                script: {
                    caption: string;
                    description: string;
                    picker: {
                        header: string;
                        introduction: string;
                        learn_more: string;
                        no_scripts: string;
                        add_script: string;
                        run_script: string;
                        run: string;
                        show_trace: string;
                        show_info: string;
                        filtered_by_blueprint: string;
                        headers: {
                            name: string;
                            state: string;
                            category: string;
                            area: string;
                            icon: string;
                        };
                        edit_category: string;
                        assign_category: string;
                        no_category_support: string;
                        no_category_entity_reg: string;
                        delete: string;
                        duplicate: string;
                        empty_header: string;
                        empty_text: string;
                        search: string;
                        migrate_script: string;
                        migrate_script_description: string;
                    };
                    dialog_new: {
                        header: string;
                        create_empty: string;
                        create_empty_description: string;
                        create_blueprint: string;
                        create_blueprint_description: string;
                        blueprint_source: {
                            author: string;
                            local: string;
                            community: string;
                            homeassistant: string;
                        };
                        discover_blueprint_tip: string;
                    };
                    editor: {
                        alias: string;
                        icon: string;
                        introduction: string;
                        show_trace: string;
                        show_info: string;
                        rename: string;
                        change_mode: string;
                        take_control: string;
                        confirm_take_control: string;
                        read_only: string;
                        unavailable: string;
                        migrate: string;
                        duplicate: string;
                        field: {
                            name: string;
                            key: string;
                            description: string;
                            required: string;
                            default: string;
                            selector: string;
                            yaml_error: string;
                            key_not_null: string;
                            key_not_unique: string;
                            fields: string;
                            link_help_fields: string;
                            add_fields: string;
                            add_field: string;
                            field: string;
                            label: string;
                            field_selector: string;
                        };
                        header: string;
                        default_name: string;
                        modes: {
                            label: string;
                            learn_more: string;
                            single: string;
                            restart: string;
                            queued: string;
                            parallel: string;
                        };
                        max: {
                            queued: string;
                            parallel: string;
                        };
                        load_error_not_editable: string;
                        load_error_not_deletable: string;
                        load_error_unknown: string;
                        delete_confirm_title: string;
                        delete_confirm_text: string;
                        sequence: string;
                        sequence_sentence: string;
                        link_available_actions: string;
                        leave: {
                            unsaved_new_title: string;
                            unsaved_new_text: string;
                            unsaved_confirm_title: string;
                            unsaved_confirm_text: string;
                        };
                        paste_confirm: {
                            title: string;
                            text: string;
                        };
                        paste_toast_message: string;
                        paste_invalid_yaml: string;
                        paste_invalid_config: string;
                    };
                    trace: {
                        edit_script: string;
                    };
                };
                scene: {
                    caption: string;
                    description: string;
                    activated: string;
                    picker: {
                        header: string;
                        introduction: string;
                        learn_more: string;
                        pick_scene: string;
                        no_scenes: string;
                        add_scene: string;
                        only_editable: string;
                        edit_scene: string;
                        show_info: string;
                        apply: string;
                        delete_scene: string;
                        delete: string;
                        delete_confirm_title: string;
                        delete_confirm_text: string;
                        duplicate_scene: string;
                        duplicate: string;
                        headers: {
                            state: string;
                            name: string;
                            last_activated: string;
                            category: string;
                            editable: string;
                            area: string;
                            icon: string;
                        };
                        edit_category: string;
                        assign_category: string;
                        no_category_support: string;
                        no_category_entity_reg: string;
                        empty_header: string;
                        empty_text: string;
                        search: string;
                    };
                    editor: {
                        review_mode: string;
                        review_mode_detail: string;
                        live_edit: string;
                        live_edit_detail: string;
                        enter_live_mode_unsaved: string;
                        save_before_live: string;
                        switch_to_review_mode: string;
                        default_name: string;
                        load_error_not_editable: string;
                        load_error_unknown: string;
                        save: string;
                        unsaved_confirm_title: string;
                        unsaved_confirm_text: string;
                        name: string;
                        icon: string;
                        area: string;
                        devices: {
                            header: string;
                            introduction: string;
                            introduction_review: string;
                            add: string;
                            delete: string;
                        };
                        entities: {
                            header: string;
                            introduction: string;
                            introduction_review: string;
                            without_device: string;
                            add: string;
                            delete: string;
                        };
                    };
                };
                cloud: {
                    description_login: string;
                    description_not_login: string;
                    description_features: string;
                    login: {
                        title: string;
                        introduction: string;
                        introduction2: string;
                        introduction2a: string;
                        introduction3: string;
                        learn_more_link: string;
                        sign_in: string;
                        email: string;
                        email_error_msg: string;
                        password: string;
                        password_error_msg: string;
                        totp_code_prompt_title: string;
                        totp_code: string;
                        cancel: string;
                        submit: string;
                        forgot_password: string;
                        start_trial: string;
                        trial_info: string;
                        alert_password_change_required: string;
                        alert_email_confirm_necessary: string;
                        alert_mfa_code_required: string;
                        alert_mfa_expired_or_not_started: string;
                        alert_totp_code_invalid: string;
                        cloud_pipeline_title: string;
                        cloud_pipeline_text: string;
                    };
                    forgot_password: {
                        title: string;
                        subtitle: string;
                        instructions: string;
                        email: string;
                        email_error_msg: string;
                        send_reset_email: string;
                        check_your_email: string;
                    };
                    register: {
                        title: string;
                        headline: string;
                        information: string;
                        information2: string;
                        feature_remote_control: string;
                        feature_google_home: string;
                        feature_amazon_alexa: string;
                        feature_webhook_apps: string;
                        information3: string;
                        information3a: string;
                        information4: string;
                        link_terms_conditions: string;
                        link_privacy_policy: string;
                        create_account: string;
                        email_address: string;
                        email_error_msg: string;
                        password: string;
                        password_error_msg: string;
                        start_trial: string;
                        resend_confirm_email: string;
                        clicked_confirm: string;
                        confirm_email: string;
                        account_created: string;
                    };
                    account: {
                        download_support_package: string;
                        reset_cloud_data: string;
                        reset_data_confirm_title: string;
                        reset_data_confirm_text: string;
                        reset: string;
                        reset_data_failed: string;
                        thank_you_note: string;
                        nabu_casa_account: string;
                        connection_status: string;
                        manage_account: string;
                        sign_out: string;
                        sign_out_confirm: string;
                        integrations: string;
                        integrations_introduction: string;
                        integrations_introduction2: string;
                        integrations_link_all_features: string;
                        tip_moved_voice_assistants: string;
                        connected: string;
                        connecting: string;
                        not_connected: string;
                        fetching_subscription: string;
                        tts: {
                            title: string;
                            description: string;
                            default_language: string;
                            default_voice: string;
                            try: string;
                            dialog: {
                                header: string;
                                message: string;
                                example_message: string;
                                target: string;
                                target_browser: string;
                                play: string;
                                create_automation: string;
                            };
                        };
                        remote: {
                            title: string;
                            connected: string;
                            not_connected: string;
                            reconnecting: string;
                            access_is_being_prepared: string;
                            cerificate_loading: string;
                            cerificate_loaded: string;
                            cerificate_error: string;
                            info: string;
                            info_instance_will_be_available: string;
                            link_learn_how_it_works: string;
                            security_options: string;
                            external_activation: string;
                            external_activation_secondary: string;
                            drop_connection_warning_title: string;
                            drop_connection_warning: string;
                            certificate_info: string;
                            certificate_expire: string;
                            more_info: string;
                        };
                        ice_servers: {
                            title: string;
                            info: string;
                            link_learn_how_it_works: string;
                        };
                        alexa: {
                            title: string;
                            info: string;
                            enable_ha_skill: string;
                            config_documentation: string;
                            enable_state_reporting: string;
                            info_state_reporting: string;
                            state_reporting_error: string;
                            show_entities: string;
                            exposed_entities: string;
                            manual_config: string;
                            enable: string;
                            disable: string;
                            not_configured_title: string;
                            not_configured_text: string;
                            link_learn_how_it_works: string;
                            expose_new_entities: string;
                            expose_new_entities_info: string;
                        };
                        google: {
                            title: string;
                            info: string;
                            http_use_ssl_warning_title: string;
                            http_use_ssl_warning_text: string;
                            config_documentation: string;
                            enable_state_reporting: string;
                            info_state_reporting: string;
                            security_devices: string;
                            enter_pin_info: string;
                            devices_pin: string;
                            enter_pin_hint: string;
                            show_entities: string;
                            exposed_entities: string;
                            manual_config: string;
                            enter_pin_error: string;
                            not_configured_title: string;
                            not_configured_text: string;
                            link_learn_how_it_works: string;
                            expose_new_entities: string;
                            expose_new_entities_info: string;
                        };
                        webhooks: {
                            title: string;
                            info: string;
                            no_hooks_yet: string;
                            no_hooks_yet_link_integration: string;
                            no_hooks_yet2: string;
                            no_hooks_yet_link_automation: string;
                            link_learn_more: string;
                            loading: string;
                            manage: string;
                            disable_hook_error_msg: string;
                        };
                    };
                    dialog_certificate: {
                        alternative_names: string;
                        certificate_information: string;
                        certificate_expiration_date: string;
                        will_be_auto_renewed: string;
                        fingerprint: string;
                        close: string;
                    };
                    dialog_already_connected: {
                        heading: string;
                        description: string;
                        other_home_assistant: string;
                        instance_name: string;
                        instance_version: string;
                        ip_address: string;
                        connected_at: string;
                        obfuscated_ip: {
                            show: string;
                            hide: string;
                        };
                        info_backups: {
                            title: string;
                            description: string;
                        };
                        close: string;
                        login_here: string;
                    };
                    dialog_cloudhook: {
                        webhook_for: string;
                        managed_by_integration: string;
                        info_disable_webhook: string;
                        link_disable_webhook: string;
                        public_url: string;
                        view_documentation: string;
                        close: string;
                        confirm_disable_title: string;
                        confirm_disable_text: string;
                    };
                };
                devices: {
                    add_prompt: string;
                    add_prompt_enabled: string;
                    add_prompt_disabled: string;
                    add_device: string;
                    caption: string;
                    description: string;
                    filtering_by_config_entry: string;
                    device_info: string;
                    edit_settings: string;
                    restore_entity_ids: string;
                    unnamed_device: string;
                    unknown_error: string;
                    name: string;
                    update: string;
                    no_devices: string;
                    enabled_label: string;
                    enabled_cause: string;
                    disabled_by: {
                        user: string;
                        integration: string;
                        config_entry: string;
                    };
                    enabled_description: string;
                    open_configuration_url: string;
                    set_up_voice_assistant: string;
                    download_diagnostics: string;
                    download_diagnostics_integration: string;
                    delete_device: string;
                    delete_device_integration: string;
                    connected_devices: {
                        heading: string;
                        show_more: string;
                    };
                    type: {
                        device_heading: string;
                        device: string;
                        service_heading: string;
                        service: string;
                    };
                    automation: {
                        automations_heading: string;
                        automations: string;
                        no_automations: string;
                        unknown_automation: string;
                        create: string;
                        create_disable: string;
                        new: {
                            title: string;
                            description: string;
                        };
                        triggers: {
                            title: string;
                            description: string;
                            no_triggers: string;
                            unknown_trigger: string;
                        };
                        conditions: {
                            title: string;
                            description: string;
                            no_conditions: string;
                            unknown_condition: string;
                        };
                        actions: {
                            title: string;
                            description: string;
                            no_actions: string;
                            unknown_action: string;
                        };
                        no_device_automations: string;
                    };
                    script: {
                        scripts_heading: string;
                        scripts: string;
                        no_scripts: string;
                        create: string;
                        create_disable: string;
                        new: {
                            title: string;
                            description: string;
                        };
                        actions: {
                            title: string;
                            description: string;
                        };
                    };
                    scene: {
                        scenes_heading: string;
                        scenes: string;
                        no_scenes: string;
                        create: string;
                        create_disable: string;
                    };
                    cant_edit: string;
                    device_not_found: string;
                    entities: {
                        entities: string;
                        control: string;
                        event: string;
                        sensor: string;
                        diagnostic: string;
                        notify: string;
                        assist: string;
                        config: string;
                        add_entities_lovelace: string;
                        none: string;
                        show_less: string;
                        disabled_entities: string;
                        hidden: string;
                    };
                    confirm_disable_config_entry_title: string;
                    confirm_disable_config_entry_message: string;
                    update_device_error: string;
                    disabled: string;
                    data_table: {
                        icon: string;
                        device: string;
                        manufacturer: string;
                        model: string;
                        area: string;
                        floor: string;
                        integration: string;
                        battery: string;
                        disabled_by: string;
                        no_devices: string;
                        no_integration: string;
                        unknown: string;
                    };
                    delete: string;
                    confirm_delete: string;
                    confirm_delete_integration: string;
                    error_delete: string;
                    picker: {
                        search: string;
                        state: string;
                        bulk_actions: {
                            move_area: string;
                            no_area: string;
                            add_area: string;
                            delete_selected: {
                                button: string;
                                confirm_title: string;
                                confirm_text: string;
                                confirm_partly_text: string;
                                partial_failure_title: string;
                                partial_failure: string;
                            };
                        };
                    };
                };
                entities: {
                    caption: string;
                    description: string;
                    picker: {
                        header: string;
                        introduction: string;
                        introduction2: string;
                        search: string;
                        unnamed_entity: string;
                        filtering_by_config_entry: string;
                        status: {
                            available: string;
                            unavailable: string;
                            enabled: string;
                            disabled: string;
                            visible: string;
                            hidden: string;
                            not_provided: string;
                            unmanageable: string;
                        };
                        headers: {
                            state_icon: string;
                            entity: string;
                            entity_id: string;
                            device: string;
                            integration: string;
                            area: string;
                            disabled_by: string;
                            status: string;
                            domain: string;
                            availability: string;
                            visibility: string;
                            enabled: string;
                        };
                        selected: string;
                        enable_selected: {
                            button: string;
                            confirm_title: string;
                            confirm_text: string;
                        };
                        disable_selected: {
                            button: string;
                            confirm_title: string;
                            confirm_text: string;
                        };
                        restore_entity_id_selected: {
                            button: string;
                            confirm_title: string;
                            confirm_text: string;
                            changes: string;
                        };
                        delete_selected: {
                            button: string;
                            confirm_title: string;
                            confirm_text: string;
                            confirm_partly_text: string;
                        };
                        hide_selected: {
                            button: string;
                            confirm_title: string;
                            confirm: string;
                        };
                        unhide_selected: {
                            button: string;
                        };
                    };
                };
                person: {
                    caption: string;
                    introduction: string;
                    note_about_persons_configured_in_yaml: string;
                    learn_more: string;
                    no_persons_created_yet: string;
                    create_person: string;
                    add_person: string;
                    confirm_delete_title: string;
                    confirm_delete_text: string;
                    person_not_found_title: string;
                    person_not_found: string;
                    detail: {
                        new_person: string;
                        name: string;
                        name_error_msg: string;
                        linked_user: string;
                        device_tracker_intro: string;
                        no_device_tracker_available_intro: string;
                        link_presence_detection_integrations: string;
                        link_integrations_page: string;
                        device_tracker_picked: string;
                        device_tracker_pick: string;
                        delete: string;
                        update: string;
                        confirm_delete_user_title: string;
                        confirm_delete_user_text: string;
                        allow_login: string;
                        allow_login_description: string;
                        username: string;
                        password: string;
                        admin: string;
                        admin_description: string;
                        local_access_only: string;
                        local_access_only_description: string;
                        change_username: string;
                        change_password: string;
                    };
                };
                zone: {
                    caption: string;
                    description: string;
                    introduction: string;
                    no_zones_created_yet: string;
                    create_zone: string;
                    confirm_delete: string;
                    can_not_edit: string;
                    configured_in_yaml: string;
                    detail: {
                        new_zone: string;
                        name: string;
                        icon: string;
                        icon_error_msg: string;
                        location: string;
                        radius: string;
                        latitude: string;
                        longitude: string;
                        passive: string;
                        passive_note: string;
                        required_error_msg: string;
                        delete: string;
                        create: string;
                        update: string;
                    };
                    core_location_dialog: string;
                };
                integrations: {
                    caption: string;
                    description: string;
                    integration: string;
                    discovered: string;
                    disabled: string;
                    available_integrations: string;
                    new_flow: string;
                    attention: string;
                    configured: string;
                    new: string;
                    confirm_new: string;
                    add_integration: string;
                    no_integrations: string;
                    no_disabled_integrations: string;
                    no_ignored_integrations: string;
                    note_about_integrations: string;
                    note_about_website_reference: string;
                    home_assistant_website: string;
                    configure: string;
                    reconfigure: string;
                    none: string;
                    none_found: string;
                    none_found_detail: string;
                    integration_not_found: string;
                    details: string;
                    rename_dialog: string;
                    rename_input_label: string;
                    search: string;
                    search_brand: string;
                    search_helper: string;
                    add_zwave_js_device: string;
                    add_zha_device: string;
                    add_matter_device: string;
                    what_device_type: string;
                    what_to_add: string;
                    confirm_add_discovered: string;
                    disable: {
                        show_disabled: string;
                        disabled_integrations: string;
                        show: string;
                    };
                    ignore: {
                        ignore: string;
                        confirm_ignore_title: string;
                        confirm_ignore: string;
                        show_ignored: string;
                        ignored: string;
                        confirm_delete_ignore_title: string;
                        confirm_delete_ignore: string;
                        stop_ignore: string;
                    };
                    integration_page: {
                        entries: string;
                        entries_device: string;
                        entries_hub: string;
                        entries_service: string;
                        entries_helper: string;
                        entries_hardware: string;
                        entries_system: string;
                        entries_entity: string;
                        no_entries: string;
                        yaml_entry: string;
                        attention_entries: string;
                        add_entry: string;
                        add_device: string;
                        add_hub: string;
                        add_service: string;
                        add_helper: string;
                        add_hardware: string;
                        add_entity: string;
                        add_system: string;
                    };
                    config_entry: {
                        application_credentials: {
                            delete_title: string;
                            delete_prompt: string;
                            delete_detail: string;
                            delete_error_title: string;
                            dismiss: string;
                            learn_more: string;
                        };
                        device: {
                            enable: string;
                            disable: string;
                            confirm_disable_title: string;
                            confirm_disable_message: string;
                            configure: string;
                            edit: string;
                            delete: string;
                        };
                        devices: string;
                        entities: string;
                        services: string;
                        entries: string;
                        no_devices_or_entities: string;
                        devices_without_subentry: string;
                        copy: string;
                        rename: string;
                        configure: string;
                        system_options: string;
                        documentation: string;
                        download_diagnostics: string;
                        disable_debug_logging: string;
                        known_issues: string;
                        delete: string;
                        delete_confirm_title: string;
                        delete_confirm_text: string;
                        enable_debug_logging: string;
                        reconfigure: string;
                        reload: string;
                        restart_confirm: string;
                        reload_confirm: string;
                        reload_restart_confirm: string;
                        disable_restart_confirm: string;
                        enable_restart_confirm: string;
                        disable_confirm_title: string;
                        disable_confirm_text: string;
                        disable_error: string;
                        manuf: string;
                        via: string;
                        firmware: string;
                        hardware: string;
                        version: string;
                        serial_number: string;
                        unnamed_entry: string;
                        unknown_via_device: string;
                        area: string;
                        no_area: string;
                        not_loaded: string;
                        setup_in_progress: string;
                        check_the_logs: string;
                        disable: {
                            disabled: string;
                            disabled_cause: string;
                            disabled_by: {
                                user: string;
                                integration: string;
                                device: string;
                            };
                        };
                        custom_integration: string;
                        legacy_integration: string;
                        custom_overwrites_core: string;
                        depends_on_cloud: string;
                        yaml_only: string;
                        no_config_flow: string;
                        disabled_polling: string;
                        debug_logging_enabled: string;
                        state: {
                            loaded: string;
                            setup_error: string;
                            migration_error: string;
                            setup_retry: string;
                            not_loaded: string;
                            failed_unload: string;
                            setup_in_progress: string;
                        };
                        open_configuration_url: string;
                        bronze_quality: string;
                        silver_quality: string;
                        gold_quality: string;
                        platinum_quality: string;
                    };
                    config_flow: {
                        success: string;
                        device_created: string;
                        device_name: string;
                        aborted: string;
                        close: string;
                        finish: string;
                        finish_skip: string;
                        submit: string;
                        next: string;
                        preview: string;
                        yaml_only_title: string;
                        yaml_only: string;
                        open_documentation: string;
                        no_config_flow: string;
                        not_all_required_fields: string;
                        error_saving_device: string;
                        error_saving_entity: string;
                        created_config: string;
                        external_step: {
                            description: string;
                            open_site: string;
                        };
                        loading: {
                            loading_flow: string;
                            loading_step: string;
                            fallback_title: string;
                        };
                        error: string;
                        could_not_load: string;
                        not_loaded: string;
                        supported_brand_flow: string;
                        missing_zwave_zigbee_title: string;
                        missing_zwave_zigbee: string;
                        missing_matter: string;
                        supported_hardware: string;
                        proceed: string;
                        single_config_entry_title: string;
                        single_config_entry: string;
                    };
                };
                users: {
                    caption: string;
                    description: string;
                    users_privileges_note: string;
                    is_not_active: string;
                    is_system: string;
                    is_local: string;
                    is_owner: string;
                    picker: {
                        headers: {
                            name: string;
                            username: string;
                            group: string;
                            system: string;
                            is_active: string;
                            local: string;
                            icon: string;
                        };
                        add_user: string;
                    };
                    editor: {
                        caption: string;
                        name: string;
                        username: string;
                        password: string;
                        change_password: string;
                        change_username: string;
                        activate_user: string;
                        deactivate_user: string;
                        delete_user: string;
                        update_user: string;
                        id: string;
                        owner: string;
                        admin: string;
                        admin_description: string;
                        group: string;
                        active: string;
                        active_description: string;
                        local_access_only: string;
                        local_access_only_description: string;
                        system_generated: string;
                        system_generated_read_only_users: string;
                        unnamed_user: string;
                        confirm_user_deletion_title: string;
                        confirm_user_deletion_text: string;
                    };
                    add_user: {
                        caption: string;
                        password: string;
                        password_confirm: string;
                        password_not_match: string;
                        local_only: string;
                        create: string;
                    };
                    change_password: {
                        caption: string;
                        new_password: string;
                        password_confirm: string;
                        change: string;
                        password_no_match: string;
                        password_changed: string;
                    };
                    change_username: {
                        caption: string;
                        new_username: string;
                        change: string;
                        username_changed: string;
                        failed: string;
                    };
                };
                application_credentials: {
                    caption: string;
                    description: string;
                    editor: {
                        caption: string;
                        description: string;
                        missing_credentials: string;
                        missing_credentials_domain_link: string;
                        view_documentation: string;
                        add: string;
                        domain: string;
                        name: string;
                        client_id: string;
                        client_id_helper: string;
                        client_secret: string;
                        client_secret_helper: string;
                    };
                    picker: {
                        add_application_credential: string;
                        headers: {
                            name: string;
                            client_id: string;
                            application: string;
                        };
                        remove: {
                            button: string;
                            confirm_title: string;
                        };
                        remove_selected: {
                            button: string;
                            confirm_title: string;
                            confirm_text: string;
                            error_title: string;
                        };
                        selected: string;
                    };
                };
                mqtt: {
                    title: string;
                    settings_title: string;
                    option_flow: string;
                    description_publish: string;
                    topic: string;
                    payload: string;
                    publish: string;
                    description_listen: string;
                    json_formatting: string;
                    listening_to: string;
                    subscribe_to: string;
                    start_listening: string;
                    stop_listening: string;
                    message_received: string;
                    qos: string;
                    retain: string;
                };
                bluetooth: {
                    title: string;
                    settings_title: string;
                    option_flow: string;
                    advertisement_monitor: string;
                    advertisement_monitor_details: string;
                    connection_slot_allocations_monitor: string;
                    connection_slot_allocations_monitor_details: string;
                    connection_monitor: string;
                    visualization: string;
                    used_connection_slot_allocations: string;
                    no_connections: string;
                    no_advertisements_found: string;
                    no_connection_slot_allocations: string;
                    no_active_connection_support: string;
                    no_scanner_state_available: string;
                    current_scanning_mode: string;
                    requested_scanning_mode: string;
                    scanning_mode_none: string;
                    scanning_mode_active: string;
                    scanning_mode_passive: string;
                    scanner_mode_mismatch: string;
                    scanner_mode_mismatch_remote: string;
                    scanner_mode_mismatch_usb: string;
                    scanner_mode_mismatch_uart: string;
                    address: string;
                    name: string;
                    source: string;
                    rssi: string;
                    source_address: string;
                    updated: string;
                    device: string;
                    device_information: string;
                    advertisement_data: string;
                    manufacturer_data: string;
                    service_data: string;
                    service_uuids: string;
                    copy_to_clipboard: string;
                    area: string;
                    core: string;
                    scanners: string;
                    known_devices: string;
                    unknown_devices: string;
                };
                dhcp: {
                    title: string;
                    mac_address: string;
                    hostname: string;
                    ip_address: string;
                    no_devices_found: string;
                };
                thread: {
                    other_networks: string;
                    my_network: string;
                    no_preferred_network: string;
                    more_info: string;
                    add_open_thread_border_router: string;
                    reset_border_router: string;
                    add_to_my_network: string;
                    default_router_not_found: string;
                    default_router: string;
                    set_default_router: string;
                    no_routers_otbr_network: string;
                    add_dataset_from_tlv: string;
                    add_dataset: string;
                    add_dataset_label: string;
                    add_dataset_button: string;
                    confirm_reset_border_router: string;
                    confirm_reset_border_router_text: string;
                    confirm_set_dataset_border_router: string;
                    confirm_set_dataset_border_router_text: string;
                    otbr_config_failed: string;
                    confirm_delete_dataset: string;
                    confirm_delete_dataset_text: string;
                    no_border_routers: string;
                    no_preferred_router: string;
                    border_routers: string;
                    managed_by_home_assistant: string;
                    operational_dataset: string;
                    change_channel: string;
                    change_channel_initiated_title: string;
                    change_channel_initiated_text: string;
                    change_channel_invalid: string;
                    change_channel_label: string;
                    change_channel_multiprotocol_enabled_title: string;
                    change_channel_multiprotocol_enabled_text: string;
                    change_channel_range: string;
                    change_channel_text: string;
                    thread_network_info: string;
                    thread_network_delete_credentials: string;
                    thread_network_send_credentials_ha: string;
                    thread_network_send_credentials_phone: string;
                    thread_network_make_preferred: string;
                };
                ssdp: {
                    name: string;
                    ssdp_st: string;
                    ssdp_location: string;
                    ssdp_headers: string;
                    upnp: string;
                    discovery_information: string;
                    copy_to_clipboard: string;
                    no_devices_found: string;
                    show_raw_data: string;
                    raw_data_title: string;
                };
                zeroconf: {
                    name: string;
                    type: string;
                    port: string;
                    ip_addresses: string;
                    properties: string;
                    discovery_information: string;
                    copy_to_clipboard: string;
                    no_devices_found: string;
                };
                zha: {
                    common: {
                        clusters: string;
                        manufacturer_code_override: string;
                        value: string;
                    };
                    configuration_page: {
                        status_title: string;
                        status_online: string;
                        status_offline: string;
                        devices: string;
                        devices_offline: string;
                        update_button: string;
                        download_backup: string;
                        migrate_radio: string;
                        network_settings_title: string;
                        change_channel: string;
                        channel_dialog: {
                            title: string;
                            text: string;
                        };
                    };
                    add_device_page: {
                        spinner: string;
                        pairing_mode: string;
                        pairing_mode_link: string;
                        discovered_text: string;
                        no_devices_found: string;
                        search_again: string;
                    };
                    add_device: string;
                    clusters: {
                        header: string;
                        help_cluster_dropdown: string;
                        tabs: {
                            attributes: string;
                            commands: string;
                        };
                    };
                    cluster_attributes: {
                        header: string;
                        introduction: string;
                        attributes_of_cluster: string;
                        read_zigbee_attribute: string;
                        write_zigbee_attribute: string;
                    };
                    cluster_commands: {
                        header: string;
                        introduction: string;
                        commands_of_cluster: string;
                        issue_zigbee_command: string;
                        help_command_dropdown: string;
                    };
                    device_pairing_card: {
                        PAIRED: string;
                        PAIRED_status_text: string;
                        INTERVIEW_COMPLETE: string;
                        INTERVIEW_COMPLETE_status_text: string;
                        CONFIGURED: string;
                        CONFIGURED_status_text: string;
                        INITIALIZED: string;
                        INITIALIZED_status_text: string;
                    };
                    network: {
                        caption: string;
                    };
                    groups: {
                        add_group: string;
                        caption: string;
                        groups: string;
                        group_id: string;
                        members: string;
                        group_info: string;
                        group_details: string;
                        group_not_found: string;
                        add_members: string;
                        remove_members: string;
                        removing_members: string;
                        create_group_details: string;
                        group_name_placeholder: string;
                        group_id_placeholder: string;
                        create_group: string;
                        create: string;
                        creating_group: string;
                        delete: string;
                    };
                    visualization: {
                        header: string;
                        caption: string;
                        refresh_topology: string;
                        device: string;
                        device_type: string;
                        device_not_in_db: string;
                        area: string;
                        coordinator: string;
                        router: string;
                        end_device: string;
                        offline: string;
                    };
                    device_binding: {
                        bind: string;
                        unbind: string;
                        picker_label: string;
                    };
                    group_binding: {
                        header: string;
                        introduction: string;
                        group_picker_label: string;
                        group_picker_help: string;
                        cluster_selection_help: string;
                        bind_button_label: string;
                        unbind_button_label: string;
                        bind_button_help: string;
                        unbind_button_help: string;
                    };
                    neighbors: {
                        name: string;
                        lqi: string;
                        relationship: string;
                        depth: string;
                    };
                    change_channel_dialog: {
                        title: string;
                        new_channel: string;
                        change_channel: string;
                        migration_warning: string;
                        description: string;
                        smart_explanation: string;
                        channel_has_been_changed: string;
                        devices_will_rejoin: string;
                        channel_auto: string;
                    };
                };
                zwave_js: {
                    navigation: {
                        network: string;
                        logs: string;
                        visualization: string;
                    };
                    common: {
                        network: string;
                        node_id: string;
                        home_id: string;
                        source: string;
                        back: string;
                        add_node: string;
                        remove_node: string;
                        remove_a_node: string;
                        rebuild_network_routes: string;
                        in_progress_inclusion_exclusion: string;
                        cancel_inclusion_exclusion: string;
                    };
                    dashboard: {
                        driver_version: string;
                        server_version: string;
                        home_id: string;
                        server_url: string;
                        devices: string;
                        provisioned_devices: string;
                        not_ready: string;
                        nvm_backup: {
                            title: string;
                            description: string;
                            download_backup: string;
                            restore_backup: string;
                            backup_failed: string;
                            restore_complete: string;
                            restore_failed: string;
                            creating: string;
                            restoring: string;
                            migrate: string;
                        };
                        data_collection: {
                            title: string;
                            description: string;
                            documentation_link: string;
                        };
                        statistics: {
                            title: string;
                            messages_tx: {
                                label: string;
                                tooltip: string;
                            };
                            messages_rx: {
                                label: string;
                                tooltip: string;
                            };
                            messages_dropped_tx: {
                                label: string;
                                tooltip: string;
                            };
                            messages_dropped_rx: {
                                label: string;
                                tooltip: string;
                            };
                            nak: {
                                label: string;
                                tooltip: string;
                            };
                            can: {
                                label: string;
                                tooltip: string;
                            };
                            timeout_ack: {
                                label: string;
                                tooltip: string;
                            };
                            timeout_response: {
                                label: string;
                                tooltip: string;
                            };
                            timeout_callback: {
                                label: string;
                                tooltip: string;
                            };
                        };
                    };
                    device_info: {
                        zwave_info: string;
                        node_id: string;
                        node_ready: string;
                        device_config: string;
                        installer_settings: string;
                        reinterview_device: string;
                        rebuild_routes: string;
                        update_firmware: string;
                        highest_security: string;
                        hard_reset_controller: string;
                        unknown: string;
                        zwave_plus: string;
                        zwave_plus_version: string;
                        node_statistics: string;
                        custom_device_config: string;
                    };
                    hard_reset_controller: {
                        NotStarted: {
                            title: string;
                            body: string;
                        };
                        InProgress: {
                            title: string;
                            body: string;
                        };
                        Done: {
                            title: string;
                            body: string;
                        };
                        confirmation: string;
                    };
                    node_statistics: {
                        title: string;
                        commands_tx: {
                            label: string;
                            tooltip: string;
                        };
                        commands_rx: {
                            label: string;
                            tooltip: string;
                        };
                        commands_dropped_tx: {
                            label: string;
                            tooltip: string;
                        };
                        commands_dropped_rx: {
                            label: string;
                            tooltip: string;
                        };
                        timeout_response: {
                            label: string;
                            tooltip: string;
                        };
                        rtt: {
                            label: string;
                            tooltip: string;
                        };
                        rssi: {
                            label: string;
                            tooltip: string;
                        };
                        lwr: string;
                        nlwr: string;
                    };
                    route_statistics: {
                        protocol: {
                            label: string;
                            tooltip: string;
                            protocol_data_rate: {
                                ZWave_9k6: string;
                                ZWave_40k: string;
                                ZWave_100k: string;
                                LongRange_100k: string;
                            };
                        };
                        data_rate: {
                            label: string;
                            tooltip: string;
                            protocol_data_rate: {
                                ZWave_9k6: string;
                                ZWave_40k: string;
                                ZWave_100k: string;
                                LongRange_100k: string;
                            };
                        };
                        repeaters: {
                            label: string;
                            tooltip: string;
                            repeaters: string;
                            rssi: string;
                            direct: string;
                        };
                        rssi: {
                            label: string;
                            tooltip: string;
                        };
                        route_failed_between: {
                            label: string;
                            tooltip: string;
                            not_applicable: string;
                        };
                    };
                    rssi: {
                        unit: string;
                        rssi_error: {
                            NotAvailable: string;
                            ReceiverSaturated: string;
                            NoSignalDetected: string;
                        };
                    };
                    node_config: {
                        header: string;
                        introduction: string;
                        attribution: string;
                        endpoint: string;
                        zwave_js_device_database: string;
                        battery_device_notice: string;
                        parameter_is_read_only: string;
                        between_min_max: string;
                        error_not_in_range: string;
                        error_not_numeric: string;
                        error_required: string;
                        error_device_not_found: string;
                        set_param_accepted: string;
                        set_param_queued: string;
                        set_param_error: string;
                        parameter: string;
                        bitmask: string;
                        size: string;
                        value: string;
                        format: string;
                        custom_config: string;
                        custom_config_description: string;
                        get_value: string;
                        set_value: string;
                        signed: string;
                        unsigned: string;
                        enumerated: string;
                        bitfield: string;
                        reset_to_default: {
                            button_label: string;
                            dialog: {
                                title: string;
                                text: string;
                                text_loading: string;
                                text_success: string;
                                text_error: string;
                                reset: string;
                                cancel: string;
                            };
                        };
                        default: string;
                    };
                    network_status: {
                        connected: string;
                        connecting: string;
                        unknown: string;
                    };
                    add_node: {
                        title: string;
                        searching_devices: string;
                        follow_device_instructions: string;
                        security_options: string;
                        choose_inclusion_strategy: string;
                        add_device_failed: string;
                        inclusion_failed: string;
                        getting_device_information: string;
                        saving_device: string;
                        check_logs: string;
                        timeout_error: string;
                        select_method: {
                            webcam_unsupported: string;
                            qr_code_webcam: string;
                            qr_code_webcam_description: string;
                            qr_code_manual: string;
                            qr_code_manual_description: string;
                            search_device: string;
                            search_device_description: string;
                        };
                        qr: {
                            manual: {
                                title: string;
                                text: string;
                                placeholder: string;
                            };
                            scan_code: string;
                            other_add_options: string;
                            invalid_code: string;
                            unsupported_code: string;
                        };
                        specific_device: {
                            title: string;
                            turn_on_device: string;
                            turn_on_device_description: string;
                            add_another_z_wave_device: string;
                            close_description: string;
                        };
                        select_strategy: {
                            title: string;
                            default_label: string;
                            default_description: string;
                            s0_label: string;
                            s0_description: string;
                            insecure_label: string;
                            insecure_description: string;
                            inclusion_strategy: string;
                        };
                        configure_device: {
                            title: string;
                            device_name: string;
                            device_area: string;
                            choose_network_type: string;
                            long_range_description: string;
                            mesh_label: string;
                            mesh_description: string;
                            add_device: string;
                            save_device_failed: string;
                        };
                        validate_dsk_pin: {
                            title: string;
                            text: string;
                            placeholder: string;
                        };
                        added_insecure: {
                            title: string;
                            text: string;
                            added_insecurely_text: string;
                            try_again_text: string;
                            view_device: string;
                            low_security_reason: {
                                "0": string;
                                "1": string;
                                "2": string;
                                "3": string;
                                "4": string;
                                "5": string;
                                "6": string;
                                "7": string;
                                "8": string;
                            };
                        };
                        grant_security_classes: {
                            title: string;
                            description: string;
                        };
                    };
                    provisioned: {
                        dsk: string;
                        security_classes: string;
                        unprovision: string;
                        included: string;
                        not_included: string;
                        confirm_unprovision_title: string;
                        confirm_unprovision_text: string;
                        active: string;
                    };
                    security_classes: {
                        None: {
                            title: string;
                        };
                        S2_Unauthenticated: {
                            title: string;
                            description: string;
                        };
                        S2_Authenticated: {
                            title: string;
                            description: string;
                        };
                        S2_AccessControl: {
                            title: string;
                            description: string;
                        };
                        S0_Legacy: {
                            title: string;
                            description: string;
                        };
                    };
                    remove_node: {
                        title: string;
                        introduction: string;
                        exclusion_intro: string;
                        failed_node_intro: string;
                        menu_exclude_device: string;
                        menu_remove_device: string;
                        start_exclusion: string;
                        cancel_exclusion: string;
                        follow_device_instructions: string;
                        removing_device: string;
                        exclusion_failed: string;
                        exclusion_finished: string;
                    };
                    reinterview_node: {
                        title: string;
                        introduction: string;
                        battery_device_warning: string;
                        run_in_background: string;
                        start_reinterview: string;
                        in_progress: string;
                        interview_failed: string;
                        interview_complete: string;
                    };
                    rebuild_network_routes: {
                        title: string;
                        introduction: string;
                        traffic_warning: string;
                        start_rebuilding_routes: string;
                        in_progress: string;
                        run_in_background: string;
                        stop_rebuilding_routes: string;
                        rebuilding_routes_complete: string;
                        rebuilding_routes_failed: string;
                        rebuilding_routes_cancelled: string;
                    };
                    rebuild_node_routes: {
                        title: string;
                        introduction: string;
                        traffic_warning: string;
                        start_rebuilding_routes: string;
                        rebuilding_routes_failed: string;
                        rebuilding_routes_failed_check_logs: string;
                        rebuilding_routes_complete: string;
                        in_progress: string;
                        routes_rebuild_in_progress: string;
                    };
                    update_firmware: {
                        title: string;
                        warning: string;
                        warning_controller: string;
                        introduction: string;
                        introduction_controller: string;
                        firmware_target_intro: string;
                        firmware_target: string;
                        uploading: string;
                        device_asleep: string;
                        upload_firmware: string;
                        upload_failed: string;
                        begin_update: string;
                        queued: string;
                        close_queued: string;
                        awake: string;
                        close: string;
                        in_progress: string;
                        abort: string;
                        abort_failed: string;
                        confirm_abort: string;
                        finished_status: {
                            success: string;
                            error: string;
                            try_again: string;
                            done: string;
                            done_controller: string;
                            Error_Timeout: string;
                            Error_Checksum: string;
                            Error_TransmissionFailed: string;
                            Error_InvalidManufacturerID: string;
                            Error_InvalidFirmwareID: string;
                            Error_InvalidFirmwareTarget: string;
                            Error_InvalidHeaderInformation: string;
                            Error_InvalidHeaderFormat: string;
                            Error_InsufficientMemory: string;
                            Error_InvalidHardwareVersion: string;
                            OK_WaitingForActivation: string;
                            OK_NoRestart: string;
                            OK_RestartPending: string;
                            Error_RetryLimitReached: string;
                            Error_Aborted: string;
                            Error_NotSupported: string;
                            OK: string;
                        };
                    };
                    logs: {
                        title: string;
                        log_level: string;
                        subscribed_to_logs: string;
                        log_level_changed: string;
                        download_logs: string;
                    };
                    visualization: {
                        controller: string;
                        node: string;
                        asleep_node: string;
                        dead_node: string;
                        toggle_live: string;
                        node_id: string;
                        manufacturer: string;
                        model: string;
                        status: string;
                        version: string;
                        data_rate: string;
                    };
                    node_status: {
                        "0": string;
                        "1": string;
                        "2": string;
                        "3": string;
                        "4": string;
                    };
                    protocol_data_rate: {
                        "0": string;
                        "1": string;
                        "2": string;
                        "3": string;
                        "4": string;
                    };
                    node_installer: {
                        header: string;
                        introduction: string;
                        endpoint: string;
                        no_settings: string;
                        command_class: string;
                        capability_controls: {
                            thermostat_setback: {
                                title: string;
                                setback_state_label: string;
                                setback_state_helper: string;
                                setback_special_state: {
                                    label: string;
                                    frost_protection: string;
                                    energy_saving: string;
                                    unused: string;
                                };
                                setback_type: {
                                    label: string;
                                    none: string;
                                    temporary: string;
                                    permanent: string;
                                };
                                get_setback_failed: string;
                                save_setback_failed: string;
                            };
                            multilevel_switch: {
                                title: string;
                                direction: string;
                                up: string;
                                down: string;
                                ignore_start_level: string;
                                start_level: string;
                                start_transition: string;
                                stop_transition: string;
                                control_failed: string;
                            };
                            door_lock: {
                                title: string;
                                twist_assist: string;
                                block_to_block: string;
                                auto_relock_time: string;
                                hold_release_time: string;
                                operation_type: string;
                                operation_types: {
                                    "1": string;
                                    "2": string;
                                };
                                mode: string;
                                modes: {
                                    "0": string;
                                    "1": string;
                                    "16": string;
                                    "17": string;
                                    "32": string;
                                    "33": string;
                                    "254": string;
                                    "255": string;
                                };
                                lock_timeout: string;
                                lock_timeout_helper: string;
                            };
                            color_switch: {
                                color_component: string;
                                colors: {
                                    "0": string;
                                    "1": string;
                                    "2": string;
                                    "3": string;
                                    "4": string;
                                    "5": string;
                                    "6": string;
                                    "7": string;
                                    "8": string;
                                };
                            };
                        };
                    };
                };
                matter: {
                    network_type: {
                        thread: string;
                        wifi: string;
                        ethernet: string;
                        unknown: string;
                    };
                    node_type: {
                        end_device: string;
                        sleepy_end_device: string;
                        routing_end_device: string;
                        bridge: string;
                        unknown: string;
                    };
                    device_info: {
                        device_info: string;
                        node_id: string;
                        network_type: string;
                        node_type: string;
                        network_name: string;
                        ip_adresses: string;
                        mac_address: string;
                        available: string;
                    };
                    device_actions: {
                        reinterview_device: string;
                        ping_device: string;
                        open_commissioning_window: string;
                        manage_fabrics: string;
                        view_thread_network: string;
                    };
                    manage_fabrics: {
                        title: string;
                        fabrics: string;
                        remove_fabric_confirm_header: string;
                        remove_fabric_confirm_text: string;
                        remove_fabric_failed_header: string;
                        remove_fabric_failed_text: string;
                    };
                    reinterview_node: {
                        title: string;
                        introduction: string;
                        battery_device_warning: string;
                        run_in_background: string;
                        start_reinterview: string;
                        in_progress: string;
                        interview_failed: string;
                        interview_complete: string;
                    };
                    ping_node: {
                        title: string;
                        introduction: string;
                        battery_device_warning: string;
                        start_ping: string;
                        in_progress: string;
                        ping_failed: string;
                        ping_complete: string;
                        no_ip_found: string;
                    };
                    open_commissioning_window: {
                        title: string;
                        description: string;
                        prevent_misuse_description: string;
                        start_commissioning: string;
                        in_progress: string;
                        failed: string;
                        success: string;
                        scan_code: string;
                        copy_code: string;
                    };
                };
                tips: {
                    tip: string;
                    join: string;
                    join_x: string;
                    join_mastodon: string;
                    join_bluesky: string;
                    join_forums: string;
                    join_chat: string;
                    join_blog: string;
                    join_newsletter: string;
                    media_storage: string;
                };
                analytics: {
                    caption: string;
                    description: string;
                    preferences: {
                        base: {
                            title: string;
                            description: string;
                        };
                        usage: {
                            title: string;
                            description: string;
                        };
                        statistics: {
                            title: string;
                            description: string;
                        };
                        diagnostics: {
                            title: string;
                            description: string;
                        };
                    };
                    need_base_enabled: string;
                    learn_more: string;
                    intro: string;
                    download_device_info: string;
                };
                network: {
                    caption: string;
                    description: string;
                    enabled: string;
                    disabled: string;
                    supervisor: {
                        title: string;
                        connected_to: string;
                        scan_ap: string;
                        reset: string;
                        signal_strength: string;
                        open: string;
                        wep: string;
                        wpa: string;
                        wifi: string;
                        wifi_password: string;
                        warning: string;
                        static: string;
                        auto: string;
                        disabled: string;
                        ip: string;
                        netmask: string;
                        prefix: string;
                        add_address: string;
                        gateway: string;
                        dns_server: string;
                        add_dns_server: string;
                        custom_dns: string;
                        unsaved: string;
                        failed_to_change: string;
                        hostname: {
                            title: string;
                            description: string;
                            failed_to_set_hostname: string;
                        };
                    };
                    discovery: {
                        title: string;
                        description: string;
                        dhcp: string;
                        dhcp_info: string;
                        ssdp: string;
                        ssdp_info: string;
                        zeroconf: string;
                        zeroconf_info: string;
                    };
                    network_adapter: string;
                    network_adapter_info: string;
                    ip_information: string;
                    adapter: {
                        auto_configure: string;
                        auto_configure_manual_hint: string;
                        detected: string;
                        adapter: string;
                    };
                };
                storage: {
                    caption: string;
                    description: string;
                    used_space: string;
                    detailed_description: string;
                    loading_detailed: string;
                    segments: {
                        used: string;
                        free: string;
                        system: string;
                        addons_data: string;
                        addons_config: string;
                        media: string;
                        share: string;
                        backup: string;
                        homeassistant: string;
                        ssl: string;
                    };
                    lifetime: string;
                    lifetime_description: string;
                    lifetime_used_description: string;
                    disk_metrics: string;
                    datadisk: {
                        title: string;
                        description: string;
                        extra_information: string;
                        select_device: string;
                        no_devices_title: string;
                        no_devices_text: string;
                        moving_desc: string;
                        moving: string;
                        loading_devices: string;
                        cancel: string;
                        failed_to_move: string;
                        move: string;
                    };
                    network_mounts: {
                        title: string;
                        add_title: string;
                        update_title: string;
                        no_mounts: string;
                        documentation: string;
                        not_supported: {
                            title: string;
                            supervised: string;
                            os: string;
                            navigate_to_updates: string;
                        };
                        mount_usage: {
                            backup: string;
                            media: string;
                            share: string;
                        };
                        mount_type: {
                            nfs: string;
                            cifs: string;
                        };
                        cifs_versions: {
                            auto: string;
                            legacy: string;
                        };
                        options: {
                            name: {
                                title: string;
                                description: string;
                            };
                            share: {
                                title: string;
                                description: string;
                            };
                            server: {
                                title: string;
                                description: string;
                            };
                            default_backup_mount: {
                                title: string;
                                description: string;
                            };
                            path: {
                                title: string;
                                description: string;
                            };
                            type: {
                                title: string;
                                description: string;
                            };
                            usage: {
                                title: string;
                                description: string;
                            };
                            version: {
                                title: string;
                                description: string;
                            };
                            username: {
                                title: string;
                                description: string;
                            };
                            password: {
                                title: string;
                                description: string;
                            };
                        };
                        connect: string;
                        update: string;
                        errors: {
                            reload: string;
                            invalid_name: string;
                        };
                        warnings: {
                            not_recomeded_cifs_version: string;
                        };
                    };
                };
                system_health: {
                    caption: string;
                    description: string;
                    cpu_usage: string;
                    ram_usage: string;
                    core_stats: string;
                    supervisor_stats: string;
                    integration_start_time: string;
                };
                system_dashboard: {
                    restart_homeassistant: string;
                };
            };
            lovelace: {
                strategy: {
                    "original-states": {
                        helpers: string;
                    };
                    areas: {
                        no_entities: string;
                        sensors: string;
                        sensors_description: string;
                        edit_the_area: string;
                        groups: {
                            lights: string;
                            covers: string;
                            climate: string;
                            media_players: string;
                            security: string;
                            actions: string;
                            others: string;
                        };
                        other_areas: string;
                        areas: string;
                    };
                    home: {
                        summary_list: {
                            media_players: string;
                        };
                        welcome_user: string;
                        summaries: string;
                        areas: string;
                        other_areas: string;
                        unamed_device: string;
                        others: string;
                        automations: string;
                    };
                    common_controls: {
                        not_loaded: string;
                        no_data: string;
                    };
                    light: {
                        lights: string;
                        other_lights: string;
                    };
                    security: {
                        devices: string;
                        other_devices: string;
                    };
                    climate: {
                        devices: string;
                        other_devices: string;
                    };
                    home_media_players: {
                        media_players: string;
                        other_media_players: string;
                    };
                };
                cards: {
                    confirm_delete: string;
                    show_more_info: string;
                    actions: {
                        action_confirmation: string;
                        no_entity_more_info: string;
                        no_entity_toggle: string;
                        no_navigation_path: string;
                        no_url: string;
                        no_action: string;
                    };
                    empty_state: {
                        title: string;
                        no_devices: string;
                        go_to_integrations_page: string;
                    };
                    entities: {
                        never_triggered: string;
                    };
                    "todo-list": {
                        unchecked_items: string;
                        no_unchecked_items: string;
                        checked_items: string;
                        no_status_items: string;
                        clear_items: string;
                        add_item: string;
                        today: string;
                        reorder_items: string;
                        exit_reorder_items: string;
                        drag_and_drop: string;
                        delete_item: string;
                        delete_confirm_title: string;
                        delete_confirm_text: string;
                    };
                    "picture-elements": {
                        hold: string;
                        tap: string;
                        navigate_to: string;
                        url: string;
                        toggle: string;
                        perform_action: string;
                        more_info: string;
                    };
                    iframe: {
                        error_secure_context: string;
                    };
                    "recovery-mode": {
                        header: string;
                        description: string;
                    };
                    starting: {
                        description: string;
                    };
                    map: {
                        reset_focus: string;
                        toggle_grouping: string;
                    };
                    energy: {
                        loading: string;
                        no_data: string;
                        no_data_period: string;
                        energy_usage_graph: {
                            total_consumed: string;
                            total_returned: string;
                            combined_from_grid: string;
                            consumed_solar: string;
                            consumed_battery: string;
                        };
                        energy_sources_table: {
                            grid_total: string;
                            gas_total: string;
                            solar_total: string;
                            water_total: string;
                            source: string;
                            energy: string;
                            cost: string;
                            previous_energy: string;
                            previous_cost: string;
                            battery_total: string;
                            total_costs: string;
                        };
                        energy_solar_graph: {
                            production: string;
                            forecast: string;
                            total_produced: string;
                        };
                        energy_gas_graph: {
                            total_consumed: string;
                        };
                        energy_water_graph: {
                            total_consumed: string;
                        };
                        solar_consumed_gauge: {
                            card_indicates_solar_energy_used: string;
                            card_indicates_solar_energy_used_charge_home_bat: string;
                            self_consumed_solar_energy: string;
                            not_produced_solar_energy: string;
                            self_consumed_solar_could_not_calc: string;
                        };
                        self_sufficiency_gauge: {
                            card_indicates_self_sufficiency_quota: string;
                            self_sufficiency_quota: string;
                            self_sufficiency_could_not_calc: string;
                        };
                        grid_neutrality_gauge: {
                            energy_dependency: string;
                            color_explain: string;
                            net_returned_grid: string;
                            net_consumed_grid: string;
                            grid_neutrality_not_calculated: string;
                        };
                        energy_distribution: {
                            title_today: string;
                            grid: string;
                            gas: string;
                            water: string;
                            solar: string;
                            low_carbon: string;
                            home: string;
                            battery: string;
                            go_to_energy_dashboard: string;
                        };
                        energy_devices_graph: {
                            energy_usage: string;
                            previous_energy_usage: string;
                            total_energy_usage: string;
                            change_chart_type: string;
                            untracked_consumption: string;
                            untracked: string;
                        };
                        energy_devices_detail_graph: {
                            untracked_consumption: string;
                            untracked: string;
                        };
                        carbon_consumed_gauge: {
                            card_indicates_energy_used: string;
                            low_carbon_energy_consumed: string;
                            low_carbon_energy_not_calculated: string;
                        };
                    };
                    heading: {
                        default_heading: string;
                    };
                };
                unused_entities: {
                    title: string;
                    available_entities: string;
                    select_to_add: string;
                    state_icon: string;
                    entity: string;
                    entity_id: string;
                    domain: string;
                    last_changed: string;
                    search: string;
                    no_data: string;
                };
                add_entities: {
                    yaml_unsupported: string;
                    generated_unsupported: string;
                    saving_failed: string;
                };
                views: {
                    unnamed_view: string;
                    delete_title: string;
                    delete_named_view_only: string;
                    delete_unnamed_view_only: string;
                    delete_named_view_cards: string;
                    delete_unnamed_view_cards: string;
                    delete_named_view_sections: string;
                    delete_unnamed_view_sections: string;
                };
                menu: {
                    configure_ui: string;
                    help: string;
                    search_entities: string;
                    assist: string;
                    assist_tooltip: string;
                    reload_resources: string;
                    exit_edit_mode: string;
                    close: string;
                    add: string;
                    add_device: string;
                    create_automation: string;
                    create_area: string;
                    create_area_success: string;
                    create_area_action: string;
                    add_person_success: string;
                    add_person_action: string;
                    add_person: string;
                };
                reload_resources: {
                    refresh_header: string;
                    refresh_body: string;
                };
                editor: {
                    header: string;
                    yaml_unsupported: string;
                    menu: {
                        open: string;
                        raw_editor: string;
                        manage_dashboards: string;
                        manage_resources: string;
                    };
                    common: {
                        edit: string;
                        clear: string;
                        add: string;
                        none: string;
                    };
                    raw_editor: {
                        header: string;
                        save: string;
                        unsaved_changes: string;
                        saved: string;
                        reload: string;
                        lovelace_changed: string;
                        confirm_delete_config_title: string;
                        confirm_delete_config_text: string;
                        confirm_unsaved_changes: string;
                        confirm_unsaved_comments: string;
                        error_parse_yaml: string;
                        error_invalid_config: string;
                        error_save_yaml: string;
                        error_remove: string;
                        resources_moved: string;
                    };
                    edit_lovelace: {
                        header: string;
                        explanation: string;
                        edit_title: string;
                        title: string;
                    };
                    edit_view: {
                        header: string;
                        header_name: string;
                        add: string;
                        background: {
                            settings: string;
                            image: string;
                            size: {
                                name: string;
                                options: {
                                    auto: string;
                                    cover: string;
                                    contain: string;
                                };
                            };
                            alignment: {
                                name: string;
                                options: {
                                    "top left": string;
                                    "top center": string;
                                    "top right": string;
                                    "center left": string;
                                    center: string;
                                    "center right": string;
                                    "bottom left": string;
                                    "bottom center": string;
                                    "bottom right": string;
                                };
                            };
                            opacity: string;
                            repeat: {
                                name: string;
                                options: {
                                    repeat: string;
                                    "no-repeat": string;
                                };
                            };
                            attachment: {
                                name: string;
                                options: {
                                    scroll: string;
                                    fixed: string;
                                };
                            };
                        };
                        edit: string;
                        delete: string;
                        move_left: string;
                        move_right: string;
                        tab_settings: string;
                        tab_background: string;
                        tab_visibility: string;
                        visibility: {
                            select_users: string;
                        };
                        type: string;
                        convert_view: string;
                        convert_view_title: string;
                        convert_view_text: string;
                        convert_view_action: string;
                        card_to_section_convert: string;
                        section_to_card_not_supported: string;
                        types: {
                            sections: string;
                            masonry: string;
                            sidebar: string;
                            panel: string;
                        };
                        subview: string;
                        max_columns: string;
                        section_specifics: string;
                        dense_section_placement: string;
                        dense_section_placement_helper: string;
                        top_margin: string;
                        top_margin_helper: string;
                        subview_helper: string;
                        path_helper: string;
                        edit_ui: string;
                        edit_yaml: string;
                        saving_failed: string;
                        error_same_url: string;
                        error_invalid_path: string;
                        error_number: string;
                        move_to_dashboard: string;
                        move_to_view: string;
                    };
                    edit_view_header: {
                        add_title: string;
                        header: string;
                        edit_ui: string;
                        edit_yaml: string;
                        saving_failed: string;
                        default_title: string;
                        settings: {
                            layout: string;
                            layout_options: {
                                responsive: string;
                                responsive_description: string;
                                start: string;
                                start_description: string;
                                start_rtl: string;
                                center: string;
                                center_description: string;
                            };
                            badges_position: string;
                            badges_position_options: {
                                top: string;
                                bottom: string;
                            };
                            badges_wrap: string;
                            badges_wrap_options: {
                                wrap: string;
                                scroll: string;
                                scroll_description: string;
                            };
                        };
                    };
                    edit_badges: {
                        view_no_badges: string;
                    };
                    edit_card: {
                        header: string;
                        typed_header: string;
                        pick_card: string;
                        pick_card_title: string;
                        toggle_editor: string;
                        unsaved_changes: string;
                        confirm_cancel: string;
                        show_visual_editor: string;
                        show_code_editor: string;
                        edit_ui: string;
                        edit_yaml: string;
                        add: string;
                        edit: string;
                        clear: string;
                        delete: string;
                        copy: string;
                        cut: string;
                        duplicate: string;
                        move: string;
                        move_before: string;
                        move_after: string;
                        change_position: string;
                        decrease_position: string;
                        increase_position: string;
                        options: string;
                        search_cards: string;
                        tab_config: string;
                        tab_visibility: string;
                        tab_layout: string;
                        paste_condition: string;
                        visibility: {
                            explanation: string;
                        };
                        layout: {
                            full_width: string;
                            full_width_helper: string;
                            precise_mode: string;
                            precise_mode_helper: string;
                        };
                    };
                    edit_badge: {
                        header: string;
                        typed_header: string;
                        pick_badge: string;
                        pick_badge_title: string;
                        toggle_editor: string;
                        unsaved_changes: string;
                        confirm_cancel: string;
                        show_visual_editor: string;
                        show_code_editor: string;
                        edit_ui: string;
                        edit_yaml: string;
                        add: string;
                        edit: string;
                        clear: string;
                        delete: string;
                        copy: string;
                        cut: string;
                        duplicate: string;
                        tab_config: string;
                        tab_visibility: string;
                        visibility: {
                            explanation: string;
                        };
                    };
                    suggest_badge: {
                        header: string;
                        add: string;
                    };
                    move_section: {
                        header: string;
                        strategy_error_title: string;
                        strategy_error_text_strategy: string;
                        success: string;
                        error: string;
                    };
                    move_card: {
                        header: string;
                        strategy_error_title: string;
                        strategy_error_text_strategy: string;
                        success: string;
                        error: string;
                    };
                    change_position: {
                        title: string;
                        text: string;
                    };
                    select_view: {
                        header: string;
                        dashboard_label: string;
                        views_label: string;
                        no_config: string;
                        no_views: string;
                        strategy_type: string;
                    };
                    select_dashboard: {
                        header: string;
                        cannot_move_to_strategy: string;
                        get_config_failed: string;
                        move_failed: string;
                        revert_failed: string;
                        success: string;
                    };
                    section: {
                        add_badge: string;
                        add_card: string;
                        drop_card_create_section: string;
                        create_section: string;
                        default_section_title: string;
                        imported_cards_title: string;
                        imported_cards_description: string;
                    };
                    delete_section: {
                        title: string;
                        text: string;
                    };
                    edit_section: {
                        header: string;
                        tab_visibility: string;
                        tab_settings: string;
                        edit_ui: string;
                        edit_yaml: string;
                        settings: {
                            column_span: string;
                            column_span_helper: string;
                        };
                        visibility: {
                            explanation: string;
                        };
                    };
                    suggest_card: {
                        header: string;
                        create_own: string;
                        add: string;
                    };
                    save_config: {
                        header: string;
                        para: string;
                        para_sure: string;
                        yaml_mode: string;
                        yaml_control: string;
                        yaml_config: string;
                        empty_config: string;
                        close: string;
                        save: string;
                    };
                    migrate: {
                        header: string;
                        para_no_id: string;
                        para_migrate: string;
                        migrate: string;
                    };
                    "action-editor": {
                        navigation_path: string;
                        url_path: string;
                        start_listening: string;
                        pipeline_id: string;
                        actions: {
                            default_action: string;
                            "perform-action": string;
                            "more-info": string;
                            toggle: string;
                            navigate: string;
                            assist: string;
                            url: string;
                            none: string;
                        };
                    };
                    "condition-editor": {
                        explanation: string;
                        add: string;
                        test: string;
                        testing_pass: string;
                        testing_error: string;
                        invalid_config_title: string;
                        invalid_config_text: string;
                        condition: {
                            numeric_state: {
                                label: string;
                                above: string;
                                below: string;
                            };
                            screen: {
                                label: string;
                                breakpoints: string;
                                breakpoints_list: {
                                    mobile: string;
                                    tablet: string;
                                    desktop: string;
                                    wide: string;
                                };
                                min: string;
                            };
                            state: {
                                label: string;
                                state_equal: string;
                                state_not_equal: string;
                            };
                            location: {
                                label: string;
                                locations: string;
                                locations_helper: string;
                            };
                            user: {
                                label: string;
                            };
                            or: {
                                label: string;
                            };
                            not: {
                                label: string;
                            };
                            and: {
                                label: string;
                            };
                        };
                    };
                    "strategy-editor": {
                        header: string;
                        take_control: string;
                        raw_configuration_editor: string;
                        show_code_editor: string;
                        show_visual_editor: string;
                    };
                    card: {
                        "alarm-panel": {
                            name: string;
                            available_states: string;
                            description: string;
                        };
                        area: {
                            name: string;
                            color: string;
                            alert_classes: string;
                            alert_classes_helper: string;
                            sensor_classes: string;
                            sum: string;
                            median: string;
                            description: string;
                            display_type: string;
                            content_layout: string;
                            content_layout_options: {
                                horizontal: string;
                                vertical: string;
                            };
                            display_type_options: {
                                compact: string;
                                icon: string;
                                picture: string;
                                camera: string;
                            };
                        };
                        calendar: {
                            name: string;
                            description: string;
                            initial_view: string;
                            calendar_entities: string;
                            views: {
                                dayGridMonth: string;
                                dayGridWeek: string;
                                dayGridDay: string;
                                listWeek: string;
                            };
                        };
                        conditional: {
                            name: string;
                            description: string;
                            conditions: string;
                            card: string;
                            change_type: string;
                        };
                        config: {
                            required: string;
                            optional: string;
                        };
                        entities: {
                            name: string;
                            show_header_toggle: string;
                            toggle: string;
                            description: string;
                            special_row: string;
                            edit_special_row: string;
                            entity_row_editor: string;
                            secondary_info_values: {
                                none: string;
                                "entity-id": string;
                                "last-changed": string;
                                "last-triggered": string;
                                position: string;
                                "tilt-position": string;
                                brightness: string;
                                "last-updated": string;
                                state: string;
                            };
                            entity_row: {
                                divider: string;
                                "call-service": string;
                                "perform-action": string;
                                section: string;
                                weblink: string;
                                attribute: string;
                                buttons: string;
                                conditional: string;
                                cast: string;
                                button: string;
                            };
                        };
                        entity: {
                            name: string;
                            description: string;
                        };
                        button: {
                            name: string;
                            description: string;
                            default_action_help: string;
                        };
                        "entity-filter": {
                            name: string;
                            description: string;
                        };
                        "entity-row": {
                            secondary_info: string;
                        };
                        gauge: {
                            name: string;
                            needle_gauge: string;
                            severity: {
                                define: string;
                                green: string;
                                red: string;
                                yellow: string;
                            };
                            description: string;
                        };
                        glance: {
                            name: string;
                            columns: string;
                            description: string;
                        };
                        grid: {
                            name: string;
                            description: string;
                            title: string;
                            columns: string;
                            square: string;
                        };
                        logbook: {
                            name: string;
                            description: string;
                        };
                        "history-graph": {
                            name: string;
                            description: string;
                            logarithmic_scale: string;
                            min_y_axis: string;
                            max_y_axis: string;
                            fit_y_data: string;
                        };
                        "statistics-graph": {
                            name: string;
                            description: string;
                            period: string;
                            unit: string;
                            stat_types: string;
                            stat_type_labels: {
                                mean: string;
                                min: string;
                                max: string;
                                state: string;
                                sum: string;
                                change: string;
                            };
                            chart_type: string;
                            chart_type_labels: {
                                line: string;
                                bar: string;
                            };
                            periods: {
                                hour: string;
                                day: string;
                                month: string;
                                week: string;
                                "5minute": string;
                            };
                            pick_statistic: string;
                            picked_statistic: string;
                            hide_legend: string;
                            logarithmic_scale: string;
                            min_y_axis: string;
                            max_y_axis: string;
                            fit_y_data: string;
                        };
                        statistic: {
                            name: string;
                            description: string;
                            period: string;
                            stat_types: string;
                            stat_type_labels: {
                                mean: string;
                                min: string;
                                max: string;
                                change: string;
                            };
                            periods: {
                                today: string;
                                yesterday: string;
                                this_week: string;
                                last_week: string;
                                this_month: string;
                                last_month: string;
                                this_year: string;
                                last_year: string;
                            };
                        };
                        "horizontal-stack": {
                            name: string;
                            title: string;
                            description: string;
                        };
                        humidifier: {
                            name: string;
                            description: string;
                            show_current_as_primary: string;
                        };
                        iframe: {
                            name: string;
                            description: string;
                        };
                        light: {
                            name: string;
                            description: string;
                        };
                        generic: {
                            alt_text: string;
                            aspect_ratio: string;
                            aspect_ratio_ignored: string;
                            attribute: string;
                            camera_image: string;
                            image_entity: string;
                            camera_view: string;
                            camera_view_options: {
                                auto: string;
                                live: string;
                            };
                            double_tap_action: string;
                            entities: string;
                            entity: string;
                            fit_mode: string;
                            fit_mode_options: {
                                contain: string;
                                cover: string;
                                fill: string;
                            };
                            hold_action: string;
                            hours_to_show: string;
                            days_to_show: string;
                            icon: string;
                            icon_height: string;
                            image: string;
                            maximum: string;
                            manual: string;
                            manual_description: string;
                            minimum: string;
                            name: string;
                            paste: string;
                            paste_description: string;
                            refresh_interval: string;
                            show_icon: string;
                            show_name: string;
                            show_state: string;
                            show_last_changed: string;
                            tap_action: string;
                            interactions: string;
                            title: string;
                            theme: string;
                            unit: string;
                            url: string;
                            state: string;
                            secondary_info_attribute: string;
                            search: string;
                            state_color: string;
                            suggested_cards: string;
                            other_cards: string;
                            custom_cards: string;
                            features: string;
                            actions: string;
                            content: string;
                        };
                        heading: {
                            name: string;
                            description: string;
                            heading: string;
                            heading_style: string;
                            heading_style_options: {
                                title: string;
                                subtitle: string;
                            };
                            entities: string;
                            entity_config: {
                                color: string;
                                color_helper: string;
                                name: string;
                                name_helper: string;
                                visibility: string;
                                visibility_explanation: string;
                                state_content: string;
                                displayed_elements: string;
                                displayed_elements_options: {
                                    icon: string;
                                    state: string;
                                };
                            };
                            default_heading: string;
                        };
                        map: {
                            name: string;
                            geo_location_sources: string;
                            no_geo_location_sources: string;
                            appearance: string;
                            theme_mode: string;
                            theme_modes: {
                                auto: string;
                                light: string;
                                dark: string;
                            };
                            default_zoom: string;
                            source: string;
                            description: string;
                        };
                        markdown: {
                            name: string;
                            content: string;
                            style: string;
                            style_options: {
                                card: string;
                                "text-only": string;
                            };
                            description: string;
                        };
                        clock: {
                            name: string;
                            description: string;
                            clock_style: string;
                            clock_styles: {
                                digital: string;
                                analog: string;
                            };
                            clock_size: string;
                            clock_sizes: {
                                small: string;
                                medium: string;
                                large: string;
                            };
                            show_seconds: string;
                            time_format: string;
                            time_formats: {
                                auto: string;
                                language: string;
                                system: string;
                                "24": string;
                                "12": string;
                            };
                            time_zone: string;
                            time_zones: {
                                auto: string;
                            };
                            no_background: string;
                            border: {
                                label: string;
                                description: string;
                            };
                            ticks: {
                                label: string;
                                description: string;
                                none: {
                                    label: string;
                                    description: string;
                                };
                                quarter: {
                                    label: string;
                                    description: string;
                                };
                                hour: {
                                    label: string;
                                    description: string;
                                };
                                minute: {
                                    label: string;
                                    description: string;
                                };
                            };
                            seconds_motion: {
                                label: string;
                                description: string;
                                continuous: {
                                    label: string;
                                    description: string;
                                };
                                tick: {
                                    label: string;
                                    description: string;
                                };
                            };
                            face_style: {
                                label: string;
                                description: string;
                                markers: {
                                    label: string;
                                    description: string;
                                };
                                numbers_upright: {
                                    label: string;
                                    description: string;
                                };
                                roman: {
                                    label: string;
                                    description: string;
                                };
                            };
                        };
                        "media-control": {
                            name: string;
                            description: string;
                        };
                        picture: {
                            name: string;
                            description: string;
                            content_id_helper: string;
                        };
                        "picture-elements": {
                            name: string;
                            description: string;
                            card_options: string;
                            elements: string;
                            new_element: string;
                            confirm_delete_element: string;
                            dark_mode_image: string;
                            state_filter: string;
                            dark_mode_filter: string;
                            element_types: {
                                "state-badge": string;
                                "state-icon": string;
                                "state-label": string;
                                "service-button": string;
                                "action-button": string;
                                icon: string;
                                image: string;
                                conditional: string;
                            };
                        };
                        "picture-entity": {
                            name: string;
                            description: string;
                        };
                        "picture-glance": {
                            name: string;
                            description: string;
                            state_entity: string;
                        };
                        "plant-status": {
                            name: string;
                            description: string;
                        };
                        sensor: {
                            name: string;
                            show_more_detail: string;
                            graph_type: string;
                            graph_options: {
                                none: string;
                                line: string;
                            };
                            description: string;
                            limit_min: string;
                            limit_max: string;
                        };
                        "todo-list": {
                            name: string;
                            description: string;
                            integration_not_loaded: string;
                            hide_completed: string;
                            hide_create: string;
                            hide_section_headers: string;
                            hide_section_headers_helper: string;
                            display_order: string;
                            item_tap_action: string;
                            actions: {
                                edit: string;
                                toggle: string;
                            };
                            sort_modes: {
                                none: string;
                                manual: string;
                                alpha_asc: string;
                                alpha_desc: string;
                                duedate_asc: string;
                                duedate_desc: string;
                            };
                        };
                        thermostat: {
                            name: string;
                            description: string;
                            show_current_as_primary: string;
                        };
                        tile: {
                            name: string;
                            description: string;
                            color: string;
                            color_helper: string;
                            icon_tap_action: string;
                            icon_hold_action: string;
                            icon_double_tap_action: string;
                            show_entity_picture: string;
                            hide_state: string;
                            state_content: string;
                            features_position: string;
                            features_position_options: {
                                bottom: string;
                                bottom_description: string;
                                inline: string;
                                inline_description: string;
                            };
                            features_position_helper_vertical: string;
                            content_layout: string;
                            content_layout_options: {
                                horizontal: string;
                                vertical: string;
                            };
                        };
                        "vertical-stack": {
                            name: string;
                            title: string;
                            description: string;
                        };
                        "weather-forecast": {
                            name: string;
                            description: string;
                            weather_to_show: string;
                            show_both: string;
                            show_only_current: string;
                            show_only_forecast: string;
                            forecast_type: string;
                            forecast_slots: string;
                            no_type: string;
                            daily: string;
                            hourly: string;
                            twice_daily: string;
                        };
                    };
                    elements: {
                        style: string;
                        prefix: string;
                        suffix: string;
                        state_image: string;
                        filter: string;
                        state_filter: string;
                    };
                    badge: {
                        entity: {
                            name: string;
                            description: string;
                            color: string;
                            color_helper: string;
                            show_entity_picture: string;
                            state_content: string;
                            displayed_elements: string;
                            displayed_elements_options: {
                                icon: string;
                                name: string;
                                state: string;
                            };
                        };
                        generic: {
                            manual: string;
                            manual_description: string;
                            paste: string;
                            paste_description: string;
                            suggested_badges: string;
                            other_badges: string;
                            custom_badges: string;
                        };
                    };
                    entities: {
                        name: string;
                        add: string;
                        edit: string;
                        remove: string;
                        "form-label": string;
                    };
                    features: {
                        name: string;
                        not_compatible: string;
                        no_compatible_available: string;
                        add: string;
                        edit: string;
                        remove: string;
                        types: {
                            button: {
                                label: string;
                            };
                            "cover-open-close": {
                                label: string;
                            };
                            "cover-position": {
                                label: string;
                            };
                            "cover-tilt": {
                                label: string;
                            };
                            "cover-tilt-position": {
                                label: string;
                            };
                            "date-set": {
                                label: string;
                            };
                            "fan-oscillate": {
                                label: string;
                            };
                            "fan-direction": {
                                label: string;
                            };
                            "fan-speed": {
                                label: string;
                            };
                            "alarm-modes": {
                                label: string;
                                modes: string;
                                modes_list: {
                                    armed_away: string;
                                    armed_home: string;
                                    armed_night: string;
                                    armed_vacation: string;
                                    armed_custom_bypass: string;
                                    disarmed: string;
                                };
                                customize_modes: string;
                            };
                            "light-brightness": {
                                label: string;
                            };
                            "light-color-temp": {
                                label: string;
                            };
                            "lock-commands": {
                                label: string;
                            };
                            "lock-open-door": {
                                label: string;
                            };
                            "media-player-playback": {
                                label: string;
                            };
                            "media-player-volume-buttons": {
                                label: string;
                                step: string;
                            };
                            "media-player-volume-slider": {
                                label: string;
                            };
                            "vacuum-commands": {
                                label: string;
                                commands: string;
                                commands_list: {
                                    start_pause: string;
                                    stop: string;
                                    clean_spot: string;
                                    locate: string;
                                    return_home: string;
                                };
                            };
                            "valve-open-close": {
                                label: string;
                            };
                            "valve-position": {
                                label: string;
                            };
                            "climate-fan-modes": {
                                label: string;
                                style: string;
                                style_list: {
                                    dropdown: string;
                                    icons: string;
                                };
                                customize_modes: string;
                                fan_modes: string;
                            };
                            "climate-swing-modes": {
                                label: string;
                                swing_modes: string;
                                style: string;
                                style_list: {
                                    dropdown: string;
                                    icons: string;
                                };
                                customize_modes: string;
                            };
                            "climate-swing-horizontal-modes": {
                                label: string;
                                swing_horizontal_modes: string;
                                style: string;
                                style_list: {
                                    dropdown: string;
                                    icons: string;
                                };
                                customize_modes: string;
                            };
                            "climate-hvac-modes": {
                                label: string;
                                hvac_modes: string;
                                style: string;
                                style_list: {
                                    dropdown: string;
                                    icons: string;
                                };
                                customize_modes: string;
                            };
                            "climate-preset-modes": {
                                label: string;
                                style: string;
                                style_list: {
                                    dropdown: string;
                                    icons: string;
                                };
                                customize_modes: string;
                                preset_modes: string;
                            };
                            "counter-actions": {
                                label: string;
                                actions: {
                                    increment: string;
                                    decrement: string;
                                    reset: string;
                                };
                            };
                            "fan-preset-modes": {
                                label: string;
                                style: string;
                                style_list: {
                                    dropdown: string;
                                    icons: string;
                                };
                                customize_modes: string;
                                preset_modes: string;
                            };
                            "humidifier-toggle": {
                                label: string;
                            };
                            "humidifier-modes": {
                                label: string;
                                style: string;
                                style_list: {
                                    dropdown: string;
                                    icons: string;
                                };
                                customize_modes: string;
                                modes: string;
                            };
                            "select-options": {
                                label: string;
                                options: string;
                                customize_options: string;
                            };
                            toggle: {
                                label: string;
                            };
                            "numeric-input": {
                                label: string;
                                style: string;
                                style_list: {
                                    buttons: string;
                                    slider: string;
                                };
                            };
                            "target-temperature": {
                                label: string;
                            };
                            "target-humidity": {
                                label: string;
                            };
                            "water-heater-operation-modes": {
                                label: string;
                                operation_modes: string;
                                customize_modes: string;
                                style: string;
                                style_list: {
                                    dropdown: string;
                                    icons: string;
                                };
                            };
                            "lawn-mower-commands": {
                                label: string;
                                commands: string;
                                commands_list: {
                                    start_pause: string;
                                    dock: string;
                                };
                            };
                            "update-actions": {
                                label: string;
                                backup: string;
                                backup_options: {
                                    yes: string;
                                    no: string;
                                    ask: string;
                                };
                                backup_not_supported: string;
                            };
                            "area-controls": {
                                label: string;
                                customize_controls: string;
                                controls: string;
                                controls_options: {
                                    light: string;
                                    fan: string;
                                    switch: string;
                                    "cover-awning": string;
                                    "cover-blind": string;
                                    "cover-curtain": string;
                                    "cover-damper": string;
                                    "cover-door": string;
                                    "cover-garage": string;
                                    "cover-gate": string;
                                    "cover-shade": string;
                                    "cover-shutter": string;
                                    "cover-window": string;
                                };
                                no_compatible_controls: string;
                            };
                            "bar-gauge": {
                                label: string;
                            };
                            "trend-graph": {
                                label: string;
                            };
                        };
                    };
                    strategy: {
                        "original-states": {
                            areas: string;
                            hide_entities_without_area: string;
                            hide_energy: string;
                        };
                        iframe: {
                            url: string;
                        };
                        areas: {
                            areas_display: string;
                            no_entities: string;
                            use_compact_card: string;
                            use_large_card: string;
                        };
                        home: {
                            favorite_entities: string;
                            add_favorite_entity: string;
                        };
                    };
                    view: {
                        panel_mode: {
                            warning_multiple_cards: string;
                        };
                    };
                    cardpicker: {
                        no_description: string;
                        domain: string;
                        entity: string;
                        by_entity: string;
                        by_card: string;
                    };
                    badge_picker: {
                        no_description: string;
                        custom_badge: string;
                        domain: string;
                        entity: string;
                        by_entity: string;
                        by_badge: string;
                    };
                    "header-footer": {
                        header: string;
                        footer: string;
                        choose_header_footer: string;
                        types: {
                            graph: {
                                name: string;
                            };
                            picture: {
                                name: string;
                            };
                            buttons: {
                                name: string;
                            };
                        };
                    };
                    "sub-element-editor": {
                        types: {
                            header: string;
                            footer: string;
                            row: string;
                            feature: string;
                            element: string;
                            "heading-badge": string;
                            element_type: string;
                        };
                    };
                };
                warning: {
                    attribute_not_found: string;
                    attribute_not_numeric: string;
                    entity_not_found: string;
                    entity_non_numeric: string;
                    entity_unavailable: string;
                    starting: string;
                };
                changed_toast: {
                    message: string;
                };
                components: {
                    "timestamp-display": {
                        invalid: string;
                        invalid_format: string;
                    };
                    energy_period_selector: {
                        now: string;
                        previous: string;
                        next: string;
                        compare: string;
                    };
                };
                reload_lovelace: string;
            };
            "media-browser": {
                error: {
                    player_not_exist: string;
                };
            };
            map: {
                edit_zones: string;
            };
            profile: {
                tabs: {
                    general: string;
                    security: string;
                };
                current_user: string;
                is_owner: string;
                user_settings_header: string;
                user_settings_detail: string;
                mobile_app_settings: string;
                browser_settings: string;
                client_settings_detail: string;
                logout: string;
                logout_title: string;
                logout_text: string;
                force_narrow: {
                    header: string;
                    description: string;
                };
                customize_sidebar: {
                    header: string;
                    description: string;
                    button: string;
                };
                vibrate: {
                    header: string;
                    description: string;
                };
                enable_shortcuts: {
                    header: string;
                    description: string;
                };
                suspend: {
                    header: string;
                    description: string;
                };
                push_notifications: {
                    header: string;
                    description: string;
                    error_load_platform: string;
                    error_use_https: string;
                    push_notifications: string;
                    link_promo: string;
                    add_device_prompt: {
                        title: string;
                        input_label: string;
                    };
                };
                language: {
                    header: string;
                    link_promo: string;
                    dropdown_label: string;
                };
                number_format: {
                    header: string;
                    dropdown_label: string;
                    description: string;
                    formats: {
                        language: string;
                        system: string;
                        comma_decimal: string;
                        decimal_comma: string;
                        quote_decimal: string;
                        space_comma: string;
                        none: string;
                    };
                };
                time_format: {
                    header: string;
                    dropdown_label: string;
                    description: string;
                    formats: {
                        language: string;
                        system: string;
                        "12": string;
                        "24": string;
                    };
                };
                time_zone: {
                    header: string;
                    dropdown_label: string;
                    description: string;
                    options: {
                        local: string;
                        server: string;
                    };
                };
                date_format: {
                    header: string;
                    dropdown_label: string;
                    description: string;
                    formats: {
                        language: string;
                        system: string;
                        DMY: string;
                        MDY: string;
                        YMD: string;
                    };
                };
                first_weekday: {
                    header: string;
                    dropdown_label: string;
                    description: string;
                    values: {
                        language: string;
                        monday: string;
                        tuesday: string;
                        wednesday: string;
                        thursday: string;
                        friday: string;
                        saturday: string;
                        sunday: string;
                    };
                };
                themes: {
                    header: string;
                    error_no_theme: string;
                    link_promo: string;
                    dropdown_label: string;
                    dark_mode: {
                        auto: string;
                        light: string;
                        dark: string;
                    };
                    primary_color: string;
                    accent_color: string;
                    reset: string;
                    use_default: string;
                };
                dashboard: {
                    header: string;
                    description: string;
                    dropdown_label: string;
                    default_dashboard_label: string;
                };
                change_password: {
                    header: string;
                    current_password: string;
                    new_password: string;
                    confirm_new_password: string;
                    error_required: string;
                    submit: string;
                    error_new_mismatch: string;
                    error_new_is_old: string;
                    success: string;
                    logout_all_sessions: string;
                    logout_all_sessions_text: string;
                    delete_failed: string;
                };
                mfa: {
                    header: string;
                    disable: string;
                    enable: string;
                    confirm_disable: string;
                };
                mfa_setup: {
                    title_aborted: string;
                    title_success: string;
                    step_done: string;
                    close: string;
                    submit: string;
                };
                advanced_mode: {
                    title: string;
                    description: string;
                    link_promo: string;
                };
                entity_id_picker: {
                    title: string;
                    description: string;
                };
                refresh_tokens: {
                    header: string;
                    description: string;
                    ios_app: string;
                    android_app: string;
                    current_session: string;
                    created_at: string;
                    last_used: string;
                    not_used: string;
                    expires_in: string;
                    never_expires: string;
                    disable_token_expiration: string;
                    enable_token_expiration: string;
                    confirm_disable_token_expiration_title: string;
                    confirm_disable_token_expiration_text: string;
                    disable_expiration_failed: string;
                    enable_expiration_failed: string;
                    confirm_delete_title: string;
                    confirm_delete_text: string;
                    delete_all_tokens: string;
                    confirm_delete_all_title: string;
                    confirm_delete_all: string;
                    delete_failed: string;
                    current_token_tooltip: string;
                };
                long_lived_access_tokens: {
                    header: string;
                    description: string;
                    learn_auth_requests: string;
                    created: string;
                    confirm_delete_title: string;
                    confirm_delete_text: string;
                    delete_failed: string;
                    create: string;
                    create_failed: string;
                    name: string;
                    prompt_name: string;
                    prompt_copy_token: string;
                    empty_state: string;
                    qr_code_image: string;
                    generate_qr_code: string;
                };
            };
            todo: {
                assist: string;
                create_list: string;
                delete_list: string;
                add_item: string;
                information: string;
                delete_confirm_title: string;
                delete_confirm_text: string;
                restart_confirm: string;
            };
            "page-authorize": {
                initializing: string;
                authorizing: string;
                authorizing_app: string;
                authorizing_client: string;
                pick_auth_provider: string;
                abort_intro: string;
                store_token: string;
                help: string;
                welcome_home: string;
                just_checking: string;
                who_is_logging_in: string;
                other_options: string;
                forgot_password: string;
                form: {
                    working: string;
                    unknown_error: string;
                    next: string;
                    previous: string;
                    start_over: string;
                    error: string;
                    error_required: string;
                    hide_password: string;
                    show_password: string;
                    providers: {
                        command_line: {
                            step: {
                                init: {
                                    data: {
                                        username: string;
                                        password: string;
                                    };
                                };
                                mfa: {
                                    data: {
                                        code: string;
                                    };
                                    description: string;
                                };
                            };
                            error: {
                                invalid_auth: string;
                                invalid_code: string;
                            };
                            abort: {
                                login_expired: string;
                            };
                        };
                        homeassistant: {
                            step: {
                                init: {
                                    data: {
                                        username: string;
                                        password: string;
                                    };
                                };
                                mfa: {
                                    data: {
                                        code: string;
                                    };
                                    description: string;
                                };
                            };
                            error: {
                                invalid_auth: string;
                                invalid_code: string;
                            };
                            abort: {
                                login_expired: string;
                            };
                        };
                        legacy_api_password: {
                            step: {
                                init: {
                                    data: {
                                        password: string;
                                    };
                                    description: string;
                                };
                                mfa: {
                                    data: {
                                        code: string;
                                    };
                                    description: string;
                                };
                            };
                            error: {
                                invalid_auth: string;
                                invalid_code: string;
                            };
                            abort: {
                                no_api_password_set: string;
                                login_expired: string;
                            };
                        };
                        trusted_networks: {
                            step: {
                                init: {
                                    data: {
                                        user: string;
                                    };
                                    description: string;
                                };
                            };
                            abort: {
                                not_allowed: string;
                            };
                        };
                    };
                };
            };
            "page-demo": {
                cards: {
                    demo: {
                        demo_by: string;
                        next_demo: string;
                        introduction: string;
                        learn_more: string;
                    };
                };
                config: {
                    arsaboo: {
                        names: {
                            upstairs: string;
                            family_room: string;
                            kitchen: string;
                            patio: string;
                            hallway: string;
                            master_bedroom: string;
                            left: string;
                            right: string;
                            mirror: string;
                            temperature_study: string;
                        };
                        labels: {
                            lights: string;
                            information: string;
                            morning_commute: string;
                            commute_home: string;
                            entertainment: string;
                            activity: string;
                            hdmi_input: string;
                            hdmi_switcher: string;
                            volume: string;
                            total_tv_time: string;
                            turn_tv_off: string;
                            air: string;
                        };
                        unit: {
                            watching: string;
                            minutes_abbr: string;
                        };
                    };
                    sections: {
                        titles: {
                            welcome: string;
                            living_room: string;
                            study: string;
                            kitchen: string;
                            outdoor: string;
                            energy: string;
                            climate: string;
                            updates: string;
                        };
                        entities: {
                            media_player: {
                                living_room_nest_mini: string;
                                kitchen_nest_audio: string;
                                study_nest_hub: string;
                            };
                        };
                    };
                };
            };
            "developer-tools": {
                tabs: {
                    assist: {
                        title: string;
                        description: string;
                        parse_sentences: string;
                        sentences: string;
                        download_results: string;
                        no_match: string;
                        language: string;
                    };
                    debug: {
                        title: string;
                        debug_connection: {
                            title: string;
                            description: string;
                        };
                    };
                    events: {
                        title: string;
                        description: string;
                        documentation: string;
                        type: string;
                        data: string;
                        fire_event: string;
                        event_fired: string;
                        active_listeners: string;
                        count_listeners: string;
                        listen_to_events: string;
                        listening_to: string;
                        subscribe_to: string;
                        start_listening: string;
                        stop_listening: string;
                        clear_events: string;
                        alert_event_type: string;
                        notification_event_fired: string;
                        subscribe_failed: string;
                    };
                    actions: {
                        title: string;
                        description: string;
                        call_service: string;
                        response: string;
                        column_parameter: string;
                        column_description: string;
                        column_example: string;
                        fill_example_data: string;
                        yaml_mode: string;
                        ui_mode: string;
                        yaml_parameters: string;
                        all_parameters: string;
                        accepts_target: string;
                        no_template_ui_support: string;
                        copy_clipboard_template: string;
                        open_media: string;
                        errors: {
                            ui: {
                                no_action: string;
                                invalid_action: string;
                                no_target: string;
                                missing_required_field: string;
                            };
                            yaml: {
                                invalid_yaml: string;
                                no_action: string;
                                invalid_action: string;
                                no_target: string;
                                missing_required_field: string;
                            };
                        };
                    };
                    states: {
                        title: string;
                        description1: string;
                        description2: string;
                        entity: string;
                        state: string;
                        attributes: string;
                        state_attributes: string;
                        set_state: string;
                        current_entities: string;
                        filter_entities: string;
                        filter_states: string;
                        filter_attributes: string;
                        no_entities: string;
                        more_info: string;
                        alert_entity_field: string;
                        last_updated: string;
                        last_changed: string;
                        copy_id: string;
                    };
                    templates: {
                        title: string;
                        description: string;
                        editor: string;
                        result: string;
                        reset: string;
                        confirm_reset: string;
                        confirm_clear: string;
                        result_type: string;
                        jinja_documentation: string;
                        template_extensions: string;
                        unknown_error_template: string;
                        time: string;
                        all_listeners: string;
                        no_listeners: string;
                        listeners: string;
                        entity: string;
                        domain: string;
                    };
                    statistics: {
                        title: string;
                        entity: string;
                        issue: string;
                        no_issue: string;
                        issues: {
                            units_changed: string;
                            mean_type_changed: string;
                            state_class_removed: string;
                            entity_not_recorded: string;
                            entity_no_longer_recorded: string;
                            no_state: string;
                        };
                        delete_selected: string;
                        multi_delete: {
                            title: string;
                            info_text: string;
                        };
                        mean_type: {
                            "0": string;
                            "1": string;
                            "2": string;
                        };
                        fix_issue: {
                            fix: string;
                            clearing_failed: string;
                            clearing_timeout_title: string;
                            clearing_timeout_text: string;
                            fix_all: string;
                            info: string;
                            no_support: {
                                title: string;
                                info_text_1: string;
                            };
                            no_state: {
                                title: string;
                                info_text_1: string;
                                info_text_2: string;
                            };
                            entity_not_recorded: {
                                title: string;
                                info_text_1: string;
                                info_text_2: string;
                                info_text_3_link: string;
                            };
                            entity_no_longer_recorded: {
                                title: string;
                                info_text_1: string;
                                info_text_2: string;
                                info_text_3_link: string;
                                info_text_4: string;
                            };
                            state_class_removed: {
                                title: string;
                                info_text_1: string;
                                info_text_2: string;
                                info_text_3: string;
                                info_text_4: string;
                                info_text_4_link: string;
                                info_text_5: string;
                                info_text_6: string;
                            };
                            units_changed: {
                                title: string;
                                update: string;
                                clear: string;
                                how_to_fix: string;
                                info_text_1: string;
                                info_text_2: string;
                                info_text_3: string;
                            };
                            mean_type_changed: {
                                title: string;
                                info_text_1: string;
                                info_text_2: string;
                                info_text_3: string;
                            };
                            adjust_sum: {
                                title: string;
                                no_statistics_found: string;
                                info_text_1: string;
                                pick_a_time: string;
                                statistic: string;
                                start: string;
                                end: string;
                                new_value: string;
                                adjust: string;
                                outliers: string;
                                sum_adjusted: string;
                                error_sum_adjusted: string;
                            };
                        };
                        adjust_sum: string;
                        data_table: {
                            select_all_issues: string;
                            name: string;
                            statistic_id: string;
                            statistics_unit: string;
                            source: string;
                            issue: string;
                            no_statistics: string;
                        };
                    };
                    yaml: {
                        title: string;
                        section: {
                            validation: {
                                heading: string;
                                introduction: string;
                                check_config: string;
                                valid: string;
                                invalid: string;
                                warnings: string;
                                errors: string;
                            };
                            reloading: {
                                all: string;
                                heading: string;
                                introduction: string;
                                reload: string;
                                core: string;
                                group: string;
                                automation: string;
                                script: string;
                                scene: string;
                                person: string;
                                zone: string;
                                input_boolean: string;
                                input_button: string;
                                input_text: string;
                                input_number: string;
                                input_datetime: string;
                                input_select: string;
                                template: string;
                                universal: string;
                                rest: string;
                                command_line: string;
                                filter: string;
                                statistics: string;
                                generic: string;
                                generic_thermostat: string;
                                homekit: string;
                                min_max: string;
                                history_stats: string;
                                trend: string;
                                ping: string;
                                filesize: string;
                                telegram: string;
                                smtp: string;
                                mqtt: string;
                                rpi_gpio: string;
                                timer: string;
                                themes: string;
                            };
                            server_management: {
                                heading: string;
                                restart: string;
                                stop: string;
                                confirm_stop: string;
                                restart_error: string;
                            };
                        };
                    };
                };
            };
            "page-onboarding": {
                intro: string;
                back: string;
                next: string;
                finish: string;
                help: string;
                welcome: {
                    header: string;
                    start: string;
                    or_restore: string;
                    vision: string;
                    community: string;
                    download_app: string;
                    forums: string;
                    open_home_newsletter: string;
                    discord: string;
                    x: string;
                    mastodon: string;
                    playstore: string;
                    appstore: string;
                };
                user: {
                    header: string;
                    intro: string;
                    required_field: string;
                    data: {
                        name: string;
                        username: string;
                        password: string;
                        password_confirm: string;
                    };
                    helper: {
                        password: string;
                    };
                    create_account: string;
                    error: {
                        username_not_normalized: string;
                        password_not_match: string;
                    };
                };
                "core-config": {
                    location_header: string;
                    intro_location: string;
                    location_address: string;
                    osm_privacy_policy: string;
                    title_location_detect: string;
                    intro_location_detect: string;
                    country_intro: string;
                    location_name: string;
                    location_name_default: string;
                    address_label: string;
                    button_detect: string;
                    finish: string;
                };
                integration: {
                    header: string;
                    intro: string;
                    more_integrations: string;
                    finish: string;
                    all_set: string;
                    lets_start: string;
                };
                analytics: {
                    header: string;
                    finish: string;
                    preferences: {
                        base: {
                            title: string;
                            description: string;
                        };
                        usage: {
                            title: string;
                            description: string;
                        };
                        statistics: {
                            title: string;
                            description: string;
                        };
                        diagnostics: {
                            title: string;
                            description: string;
                        };
                    };
                    need_base_enabled: string;
                    learn_more: string;
                    intro: string;
                };
                restore: {
                    header: string;
                    upload_backup: string;
                    upload_backup_subtitle: string;
                    unsupported: {
                        title: string;
                        text: string;
                    };
                    ok: string;
                    upload_input_label: string;
                    upload_supports_tar: string;
                    upload_secondary: string;
                    delete: string;
                    uploading: string;
                    details: {
                        home_assistant_missing: string;
                        addons_unsupported: string;
                        summary: {
                            created: string;
                            content: string;
                        };
                        restore: {
                            title: string;
                            action: string;
                            encryption: {
                                label: string;
                                description: string;
                                description_cloud: string;
                                incorrect_key: string;
                                input_label: string;
                            };
                        };
                    };
                    data_picker: {
                        settings: string;
                        settings_and_history: string;
                        media: string;
                        share_folder: string;
                        local_addons: string;
                        addons: string;
                        ssl: string;
                    };
                    restore_no_home_assistant: string;
                    in_progress: string;
                    in_progress_description: string;
                    failed: string;
                    failed_status_description: string;
                    failed_description: string;
                    failed_wrong_password_description: string;
                    upload_supports: string;
                    upload_drop: string;
                    show_log: string;
                    hide_log: string;
                    full_backup: string;
                    partial_backup: string;
                    name: string;
                    select_type: string;
                    folders: string;
                    addons: string;
                    password_protection: string;
                    password: string;
                    confirm_password: string;
                    confirm_restore_partial_backup_title: string;
                    confirm_restore_partial_backup_text: string;
                    confirm_restore_full_backup_title: string;
                    confirm_restore_full_backup_text: string;
                    restore: string;
                    close: string;
                    cancel: string;
                    retry: string;
                    back: string;
                    restore_start_failed: string;
                    no_backup_found: string;
                    unnamed_backup: string;
                    cancel_restore: {
                        title: string;
                        text: string;
                        yes: string;
                        no: string;
                    };
                    "ha-cloud": {
                        description: string;
                        no_cloud_backup: string;
                        no_cloud_backup_description: string;
                        sign_out: string;
                        sign_out_progress: string;
                        sign_out_success: string;
                        sign_out_error: string;
                        learn_more: string;
                        sign_in_description: string;
                        login: {
                            title: string;
                            sign_in: string;
                            email: string;
                            email_error_msg: string;
                            password: string;
                            password_error_msg: string;
                            totp_code_prompt_title: string;
                            totp_code: string;
                            cancel: string;
                            submit: string;
                            forgot_password: string;
                            start_trial: string;
                            trial_info: string;
                            alert_password_change_required: string;
                            alert_email_confirm_necessary: string;
                            alert_mfa_code_required: string;
                            alert_mfa_expired_or_not_started: string;
                            alert_totp_code_invalid: string;
                        };
                        forgot_password: {
                            title: string;
                            subtitle: string;
                            instructions: string;
                            email: string;
                            email_error_msg: string;
                            send_reset_email: string;
                            check_your_email: string;
                        };
                    };
                    options: {
                        title: string;
                        upload_description: string;
                    };
                };
            };
            custom: {
                external_panel: {
                    question_trust: string;
                    complete_access: string;
                    hide_message: string;
                };
            };
            energy: {
                download_data: string;
                configure: string;
                compare: {
                    info: string;
                    compare_previous_year: string;
                    compare_previous_period: string;
                };
                setup: {
                    next: string;
                    back: string;
                    done: string;
                    step: string;
                    no_statistics_selected_title: string;
                    no_statistics_selected_description: string;
                };
                charts: {
                    stat_house_energy_meter: string;
                    solar: string;
                    by_device: string;
                };
                cards: {
                    energy_usage_graph_title: string;
                    energy_solar_graph_title: string;
                    energy_gas_graph_title: string;
                    energy_water_graph_title: string;
                    energy_distribution_title: string;
                    energy_sources_table_title: string;
                    energy_devices_graph_title: string;
                    energy_devices_detail_graph_title: string;
                    energy_sankey_title: string;
                };
            };
            history: {
                start_search: string;
                add_all: string;
                remove_all: string;
                download_data: string;
                download_data_error: string;
                add_card: string;
                add_card_error: string;
                error_no_data: string;
            };
        };
        tips: {
            keyboard_shortcut: string;
            key_c_tip: string;
            key_e_tip: string;
            key_m_tip: string;
            key_a_tip: string;
        };
    };
    "landing-page": {
        header: string;
        subheader: string;
        show_details: string;
        hide_details: string;
        network_issue: {
            title: string;
            error_get_network_info: string;
            description: string;
            resolve_different: string;
            use_cloudflare: string;
            use_google: string;
            no_primary_interface: string;
            failed: string;
            set_dns_failed: string;
            error: string;
            close: string;
        };
        logs: {
            scroll_down_button: string;
            fetch_error: string;
            retry: string;
            download_logs: string;
        };
        error_title: string;
        error_description: string;
        ui: {
            panel: {
                "page-onboarding": {
                    welcome: {
                        vision: string;
                        community: string;
                        download_app: string;
                        forums: string;
                        open_home_newsletter: string;
                        discord: string;
                        mastodon: string;
                        playstore: string;
                        appstore: string;
                    };
                    help: string;
                };
            };
        };
    };
    supervisor: {
        addon: {
            failed_to_reset: string;
            failed_to_save: string;
            state: {
                installed: string;
                not_installed: string;
                not_available: string;
            };
            panel: {
                configuration: string;
                documentation: string;
                info: string;
                log: string;
            };
            configuration: {
                no_configuration: string;
                audio: {
                    header: string;
                    default: string;
                    input: string;
                    output: string;
                };
                options: {
                    header: string;
                    edit_in_ui: string;
                    edit_in_yaml: string;
                    invalid_yaml: string;
                    show_unused_optional: string;
                };
                network: {
                    container: string;
                    disabled: string;
                    header: string;
                    show_disabled: string;
                    introduction: string;
                };
            };
            dashboard: {
                changelog: string;
                current_version: string;
                cpu_usage: string;
                ram_usage: string;
                hostname: string;
                new_update_available: string;
                not_available_arch: string;
                not_available_version: string;
                visit_addon_page: string;
                restart: string;
                start: string;
                stop: string;
                install: string;
                uninstall: string;
                rebuild: string;
                open_web_ui: string;
                protection_mode: {
                    title: string;
                    content: string;
                    enable: string;
                };
                capability: {
                    stage: {
                        title: string;
                        description: string;
                    };
                    rating: {
                        title: string;
                        description: string;
                    };
                    host_network: {
                        title: string;
                        description: string;
                    };
                    homeassistant_api: {
                        title: string;
                        description: string;
                    };
                    full_access: {
                        title: string;
                        description: string;
                    };
                    hassio_api: {
                        title: string;
                        description: string;
                    };
                    docker_api: {
                        title: string;
                        description: string;
                    };
                    host_pid: {
                        title: string;
                        description: string;
                    };
                    apparmor: {
                        title: string;
                        description: string;
                    };
                    auth_api: {
                        title: string;
                        description: string;
                    };
                    ingress: {
                        title: string;
                        description: string;
                    };
                    signed: {
                        title: string;
                        description: string;
                    };
                    label: {
                        core: string;
                        rating: string;
                        hardware: string;
                        host: string;
                        hassio: string;
                        docker: string;
                        host_pid: string;
                        apparmor: string;
                        auth: string;
                        ingress: string;
                        signed: string;
                    };
                    stages: {
                        experimental: string;
                        deprecated: string;
                    };
                    role: {
                        manager: string;
                        default: string;
                        homeassistant: string;
                        backup: string;
                        admin: string;
                    };
                };
                option: {
                    boot: {
                        title: string;
                        description: string;
                    };
                    watchdog: {
                        title: string;
                        description: string;
                    };
                    auto_update: {
                        title: string;
                        description: string;
                    };
                    ingress_panel: {
                        title: string;
                        description: string;
                    };
                    protected: {
                        title: string;
                        description: string;
                    };
                };
                action_error: {
                    uninstall: string;
                    install: string;
                    stop: string;
                    rebuild: string;
                    restart: string;
                    start: string;
                    go_to_config: string;
                    start_invalid_config: string;
                    validate_config: string;
                    get_changelog: string;
                };
            };
            documentation: {
                get_documentation: string;
            };
            logs: {
                get_logs: string;
            };
            system_managed: {
                badge: string;
                title: string;
                description: string;
                managed_by: string;
                take_control: string;
            };
        };
        common: {
            cancel: string;
            yes: string;
            no: string;
            add: string;
            failed_to_restart_name: string;
            failed_to_update_name: string;
            learn_more: string;
            new_version_available: string;
            newest_version: string;
            refresh: string;
            release_notes: string;
            reload: string;
            reset_defaults: string;
            reset_options: string;
            restart_name: string;
            restart: string;
            running_version: string;
            save: string;
            close: string;
            back: string;
            menu: string;
            show: string;
            show_more: string;
            update_available: string;
            update: string;
            version: string;
            error: {
                unknown: string;
                update_failed: string;
            };
        };
        update_available: {
            update_name: string;
            open_release_notes: string;
            description: string;
            updating: string;
            no_update: string;
            create_backup: {
                addon: string;
                addon_description: string;
                generic: string;
            };
        };
        confirm: {
            restart: {
                title: string;
                text: string;
            };
            reset_options: {
                title: string;
                text: string;
            };
        };
        dashboard: {
            addon_new_version: string;
            addon_running: string;
            addon_stopped: string;
            addons: string;
            no_addons: string;
            search_addons: string;
        };
        store: {
            missing_addons: string;
            no_results_found: string;
            registries: string;
            repositories: string;
            check_updates: string;
        };
        panel: {
            addons: string;
            dashboard: string;
            backups: string;
            store: string;
            system: string;
        };
        my: {
            not_supported: string;
            faq_link: string;
            add_addon_repository_title: string;
            add_addon_repository_description: string;
            error: string;
            error_addon_not_found: string;
            error_repository_not_found: string;
            error_addon_not_installed: string;
            error_addon_no_ingress: string;
        };
        ingress: {
            error_addon_info: string;
            error_addon_not_installed: string;
            error_addon_not_supported: string;
            error_addon_not_running: string;
            start_addon: string;
            addon_starting: string;
            error_starting_addon: string;
            error_creating_session: string;
            error_addon_not_ready: string;
            retry: string;
        };
        system: {
            log: {
                log_provider: string;
                get_logs: string;
            };
            supervisor: {
                cpu_usage: string;
                ram_usage: string;
                failed_to_set_option: string;
                failed_to_reload: string;
                failed_to_update: string;
                unsupported_title: string;
                unsupported_description: string;
                unhealthy_title: string;
                unhealthy_description: string;
                update_supervisor: string;
                channel: string;
                leave_beta_action: string;
                leave_beta_description: string;
                join_beta_action: string;
                join_beta_description: string;
                share_diagnostics: string;
                share_diagnostics_description: string;
                reload_supervisor: string;
                warning: string;
                search: string;
                share_diagonstics_title: string;
                share_diagonstics_description: string;
                unsupported_reason: {
                    apparmor: string;
                    content_trust: string;
                    dbus: string;
                    docker_configuration: string;
                    docker_version: string;
                    job_conditions: string;
                    lxc: string;
                    network_manager: string;
                    os: string;
                    os_agent: string;
                    privileged: string;
                    software: string;
                    source_mods: string;
                    systemd: string;
                    systemd_resolved: string;
                };
                unhealthy_reason: {
                    docker: string;
                    duplicate_os_installation: string;
                    oserror_bad_message: string;
                    privileged: string;
                    setup: string;
                    supervisor: string;
                    untrusted: string;
                };
            };
            host: {
                failed_to_get_hardware_list: string;
                failed_to_reboot: string;
                failed_to_shutdown: string;
                failed_to_set_hostname: string;
                failed_to_import_from_usb: string;
                failed_to_move: string;
                used_space: string;
                hostname: string;
                change_hostname: string;
                new_hostname: string;
                ip_address: string;
                change: string;
                operating_system: string;
                docker_version: string;
                deployment: string;
                lifetime_used: string;
                reboot_host: string;
                confirm_reboot: string;
                confirm_shutdown: string;
                shutdown_host: string;
                hardware: string;
                import_from_usb: string;
                move_datadisk: string;
            };
            core: {
                cpu_usage: string;
                ram_usage: string;
            };
        };
        backup: {
            search: string;
            loading_backups: string;
            no_backups: string;
            create_blocked_not_running: string;
            restore_blocked_not_running: string;
            delete_selected: string;
            delete_backup_title: string;
            delete_backup_text: string;
            delete_backup_confirm: string;
            selected: string;
            failed_to_delete: string;
            could_not_create: string;
            could_not_restore: string;
            upload_backup: string;
            download_backup: string;
            create_backup: string;
            create: string;
            location: string;
            data_disk: string;
            created: string;
            name: string;
            type: string;
            select_type: string;
            full_backup: string;
            partial_backup: string;
            addons: string;
            folders: string;
            size: string;
            password: string;
            confirm_password: string;
            password_protection: string;
            enter_password: string;
            passwords_not_matching: string;
            backup_already_running: string;
            confirm_restore_partial_backup_title: string;
            confirm_restore_partial_backup_text: string;
            confirm_restore_full_backup_title: string;
            confirm_restore_full_backup_text: string;
            confirm_delete_title: string;
            confirm_delete_text: string;
            restore: string;
            close: string;
            cancel: string;
            delete: string;
            download: string;
            more_actions: string;
            remote_download_title: string;
            remote_download_text: string;
            restore_start_failed: string;
            no_backup_found: string;
            restore_no_home_assistant: string;
            unnamed_backup: string;
        };
        dialog: {
            network: {
                title: string;
                connected_to: string;
                scan_ap: string;
                signal_strength: string;
                open: string;
                wep: string;
                wpa: string;
                wifi: string;
                wifi_password: string;
                warning: string;
                static: string;
                auto: string;
                disabled: string;
                ip_netmask: string;
                netmask: string;
                gateway: string;
                dns_servers: string;
                unsaved: string;
                failed_to_change: string;
            };
            registries: {
                title_add: string;
                title_manage: string;
                registry: string;
                username: string;
                password: string;
                no_registries: string;
                add_registry: string;
                add_new_registry: string;
                remove: string;
                failed_to_add: string;
                failed_to_remove: string;
            };
            repositories: {
                title: string;
                add: string;
                remove: string;
                used: string;
                no_repositories: string;
            };
            restart_addon: {
                title: string;
                text: string;
                restart: string;
            };
            uninstall_addon: {
                title: string;
                remove_data: string;
                uninstall: string;
            };
            hardware: {
                title: string;
                search: string;
                subsystem: string;
                id: string;
                attributes: string;
                device_path: string;
            };
            backup_location: {
                title: string;
                options: {
                    default_backup_mount: {
                        name: string;
                        description: string;
                    };
                };
            };
            datadisk_move: {
                title: string;
                description: string;
                select_device: string;
                no_devices: string;
                moving_desc: string;
                moving: string;
                loading_devices: string;
                cancel: string;
                move: string;
            };
        };
        ui: {
            components: {
                "subpage-data-table": {
                    filters: string;
                    show_results: string;
                    clear_filter: string;
                    close_filter: string;
                    exit_selection_mode: string;
                    enter_selection_mode: string;
                    sort_by: string;
                    group_by: string;
                    dont_group_by: string;
                    collapse_all_groups: string;
                    expand_all_groups: string;
                    select: string;
                    selected: string;
                    select_all: string;
                    select_none: string;
                    settings: string;
                };
                "data-table": {
                    settings: {
                        header: string;
                        hide: string;
                        show: string;
                        done: string;
                        restore: string;
                    };
                };
            };
            panel: {
                config: {
                    logs: {
                        caption: string;
                        description: string;
                        details: string;
                        search: string;
                        failed_get_logs: string;
                        no_issues_search: string;
                        load_logs: string;
                        nr_of_lines: string;
                        loading_log: string;
                        no_errors: string;
                        no_issues: string;
                        clear: string;
                        refresh: string;
                        copy: string;
                        log_provider: string;
                        multiple_messages: string;
                        level: {
                            critical: string;
                            error: string;
                            warning: string;
                            info: string;
                            debug: string;
                        };
                        custom_integration: string;
                        error_from_custom_integration: string;
                        show_full_logs: string;
                        select_number_of_lines: string;
                        lines: string;
                        download_logs: string;
                        scroll_down_button: string;
                        provider_not_found: string;
                        provider_not_available: string;
                        haos_boots_title: string;
                        show_haos_boots: string;
                        hide_haos_boots: string;
                        full_width: string;
                        wrap_lines: string;
                        current: string;
                        previous: string;
                        startups_ago: string;
                        detail: {
                            logger: string;
                            source: string;
                            integration: string;
                            documentation: string;
                            issues: string;
                            first_occurred: string;
                            last_logged: string;
                        };
                    };
                };
            };
        };
    };
};
export default _default;
