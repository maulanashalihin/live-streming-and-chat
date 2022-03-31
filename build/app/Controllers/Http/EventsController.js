"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Redis_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Addons/Redis"));
const Attendee_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Attendee"));
const Event_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Event"));
const Video_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Video"));
class EventsController {
    async index({ inertia }) {
        const events = await Event_1.default.all();
        return inertia.render('Home', { events });
    }
    async create({ inertia }) {
        return inertia.render("CreateEvent");
    }
    async store({ request, response }) {
        let data = request.all();
        const result = await Event_1.default.create(data);
        return response.redirect("/event/" + result.id + '/edit');
    }
    async show({ inertia, params }) {
        const form = await Event_1.default.find(params.id);
        if (form) {
            const data = Attendee_1.default.query().where("event_id", form.id);
            let viewer = {
                peak: '0',
                total: '0',
                concurrent: '0'
            };
            viewer.concurrent = await Redis_1.default.get("concurrent-viewer:" + form.id) || '0';
            viewer.total = await Redis_1.default.get("total-viewer:" + form.id) || '0';
            viewer.peak = await Redis_1.default.get("peak-viewer:" + form.id) || '0';
            return inertia.render("ShowEvent", { form, data, viewer });
        }
    }
    async edit({ inertia, params }) {
        const form = await Event_1.default.find(params.id);
        if (form) {
            const videos = await Video_1.default.query().where("event_id", form.id);
            return inertia.render("EditEvent", { form, videos });
        }
    }
    async update({ params, request }) {
        await Event_1.default.query().where('id', params.id).update(request.except(['id']));
    }
    async destroy({}) { }
}
exports.default = EventsController;
//# sourceMappingURL=EventsController.js.map