package com.wontlost.add2calendar;

import com.vaadin.flow.component.*;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.dependency.JsModule;

import java.util.Date;
import java.util.Optional;
import java.util.Random;

import javax.validation.constraints.NotNull;

@Tag("vaadin-add2calendar")
@JsModule("./vaadin-add2calendar.js")
@CssImport("./add2calendar.css")
public class Add2CalendarVaadin extends Button {


    private String id;

    /**
     * id will be override to 'video' if set From.camera
     */
    public Add2CalendarVaadin() {
        this("add2calendar");
    }

    /**
     * id will be override to 'video' if set From.camera
     */
    public Add2CalendarVaadin(@NotNull String id) {
        setId(id);
    }

    @Override
    public Optional<String> getId() {
        return Optional.ofNullable(id);
    }

    @Override
    public void setId(String id) {
        this.id = id;
        getElement().setProperty("id", id==null || id.length()==0? "add2calendar_"+Math.abs(new Random().nextInt()): id);
    }

    @Override
    public void setWidth(String width) {
        super.setWidth(width);
        getElement().setProperty("width", width==null ? "100%" : width);
    }

    @Override
    public void setHeight(String height) {
        super.setHeight(height);
        getElement().setProperty("height", height==null ? "100%" : height);
    }

}
